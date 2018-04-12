<?php

// Asendage see mistahes katalooginimega oma serveris,
// kuhu veebiserver kirjutada saab. Kui sأ¼nteesite palju erinevaid
// tekste, siis vajab kataloog aeg-ajalt puhastamist. Selle sisu
// vأµib أ¼leni أ¤ra kustutada koos synteesid.log failiga.
// lأµpus on vaja muuta ka veebiserveri suhtelise lingi algust!

$audiodir = 'heli/tmp';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Max-Age: 360000"); //sec

$speech = isset($_POST["speech"]) ? stripslashes(trim($_POST["speech"])) : 'Tere';
if ( empty($speech) ) { $speech = 'Tere'; }
$v = isset($_POST["v"]) ? intval($_POST["v"]) : 15;
$e = isset($_POST["e"]) ? intval($_POST["e"]) : 0;

$sum_file = "{$audiodir}/synteesid.log";
$filename = 'xxx';

// Kas ehk varasem wav juba olemas?

$kontrollsumma = md5($speech . $v . $e);
$summastring = file_get_contents($sum_file);
if (!$summastring) { $summastring = 'b:0;'; }
$summad = unserialize($summastring);
if (!is_array($summad)) { $summad = array(); }
if (isset($summad[$kontrollsumma])) {
    $filename = $summad[$kontrollsumma];
}

$wav_file = "{$audiodir}/{$filename}.wav";
$mp3_file = "{$audiodir}/{$filename}.mp3";

// _kui_ mp3 on teile oluline, siis kontrollige ka selle
// olemasolu. syntproxy kasutab puuduva mp3 faili
// tekitamiseks utiliiti lame

if (($e == 0) and (file_exists($wav_file))) { goto valmis; }

// tuleb uus tellida

$postdata = http_build_query(
  array(
    'speech' => $speech,
    'tekst' => $speech,
    'v' => $v,
    'e' => $e,
    'haal' => $v
  )
);
$opts = array('http' =>
  array(
    'method'  => 'POST',
    'header'  => 'Content-type: application/x-www-form-urlencoded',
    'content' => $postdata
  )
);
$context  = stream_context_create($opts);
if (($v >= 14) and ($v <= 17)) {
    $url = 'http://heliraamat.eki.ee/syntees/koduleht.php';
} elseif (($v >= 18) and ($v <= 23)) {
    $url = 'http://heliraamat.eki.ee/syntees/koduleht.php';
} else {
    $url = 'http://heli.eki.ee/syntees/koduleht.php';
}
$result = file_get_contents($url, false, $context);

// kأµnesأ¼nteesi server tagastab JSON rأ¤si kujul oma tehtud
// failinime(d) ilma kataloogi ja laiendita

$jsonobj = json_decode($result);
$filename = $jsonobj->wav;

$wav_file = "{$audiodir}/{$filename}.wav";
$mp3_file = "{$audiodir}/{$filename}.mp3";

// tأµmbame ja salvestame tehtud failid
// kui heliraamat tagastas valmis URLi, kasutame seda

$url = $jsonobj->wavurl;
if (empty($url)) { $url = 'http://heli.eki.ee/syntees/wave/' . $filename . '.wav'; }
file_put_contents($wav_file, fopen($url, 'r'));

$url = $jsonobj->mp3url;
if (empty($url)) { $url = 'http://heli.eki.ee/syntees/wave/' . $filename . '.mp3'; }
file_put_contents($mp3_file, fopen($url, 'r'));

// paneme uue failinime rأ¤sisse kirja

$summad[$kontrollsumma] = $filename;
$summastring = serialize($summad);
$fh = fopen($sum_file, 'w');
fwrite ($fh, $summastring);
fclose($fh);

valmis:

if (file_exists($wav_file)) {
    // teeme mp3 kui see miskipأ¤rast puudus
    if (! file_exists($mp3_file)) {
	$lame_cmd = sprintf("lame %s %s", $wav_file, $mp3_file);
	exec($lame_cmd);
    }

    // ja tagastame suhtelise viida
    $wav_file = "heli/tmp/{$filename}.wav";
    $mp3_file = "heli/tmp/{$filename}.mp3";

    header ("Content-Type: application/javascript");
    $vastus = array ('wav' => $wav_file, 'mp3' => $mp3_file);
    echo json_encode ($vastus);
}

?>
