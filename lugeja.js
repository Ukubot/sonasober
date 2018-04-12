jQuery(document).ready(function() {
  var kuula_id='';
  var kuula_tekst='';
  var kuula_haal='';
  var kuula_meetod='';
  var kuula_haalenr=-1;
  var faililingid = 0;

  // kui klأµpsati tekstisisest kuulamisnuppu
  jQuery('img[data-kuula]').bind("click", function(e) {
    e.preventDefault();
    faililingid = 0;
    kuula_id = jQuery(this).data('kuula');
    kuula_haalenr = haalnumbriks (jQuery(this).data('haal'),jQuery(this).data('meetod'));
    if (kuula_id) {
      kuula_tekst = '';
      jQuery('[data-kuula='+kuula_id+']').not('img').each(function() {
        kuula_tekst = kuula_tekst + ' ' + jQuery(this).html();
      });
      tee_audio(kuula_haalenr,kuula_tekst);
    
    }
  });

  // kui klأµpsati tekstikasti kuulamisnuppu
  jQuery('#kuulaklikk').bind("click", function(e) {
    e.preventDefault();
    faililingid = 1;
    jQuery('#synttulemus').hide();
    kuula_tekst = jQuery('#kuulatekst').val();
    //Hardcoded voice to nr 2
    //Original
    //kuula_haalenr = jQuery('input[name="v"]:checked', '#kuulavorm').val();
    kuula_haalenr = 2;
    kuula_emotsioon = jQuery('#e', '#kuulavorm').val();
    tee_emotsioon(kuula_haalenr,kuula_emotsioon,kuula_tekst);
    jQuery('#synttulemus').show();
    
  });

  // ammendav numbrite loend on heli.eki.ee tekstikasti lأ¤htekoodis
  function haalnumbriks (h, m) {
    m = m.toLowerCase();
    h = h.toLowerCase();
    if (m == "espeak") { return 10; }
    if (m == "mbrola") { return 98; }
    if (m == "clunits") {
      switch (h) {
        case 'liisi' : return 1; break;
        case 'riina' : return 2; break;
        case 'tأµnu' : return 3; break;
        case 'liisi_cg' : return 4; break;
        case 'eva' : return 12; break;
        default : return 2; break;
      }
    }
    if (m == "hts") {
      switch (h) {
        case 'riina' : return 5; break;
        case 'tأµnu' : return 6; break;
        case 'liisi' : return 7; break;
        case 'luukas' : return 8; break;
        case 'eva' : return 11; break;
        default : return 6; break;
      }
    }
    if (m == "hts2") {
      switch (h) {
        case 'eva' : return 14; break;
        case 'tأµnu' : return 15; break;
        case 'liisi' : return 16; break;
        case 'riina' : return 17; break;
        default : return 15; break;
      }
    }
    if (m == "oss") {
      switch (h) {
        case 'eva' : return 18; break;
        case 'tأµnu' : return 19; break;
        case 'liisi' : return 20; break;
        case 'riina' : return 21; break;
        case 'einar' : return 22; break;
        case 'luukas' : return 23; break;
        default : return 20; break;
      }
    }
    return 14;
  }

  function tee_audio (n, t) {
    jQuery.post (
      "syntproxy.php",
      { v: n, speech: t },
      function (data) {
        failidvalmis(data);
      },
      "json"
    );
  }

  function tee_emotsioon (n, e, t) {
    jQuery.post (
      "syntproxy.php",
      { v: n, e: e, speech: t },
      function (data) {
        failidvalmis(data);
      },
      "json"
    );
  }

  function failidvalmis (jsonvastus) {
    if (faililingid == 1) {
      jQuery('#syntwav').attr('href', jsonvastus.wav);
      jQuery('#syntmp3').attr('href', jsonvastus.mp3);
    }
    sourcewav = '<source type="audio/x-wav" src="' + jsonvastus.wav + '" />';
    sourcemp3 = '<source type="audio/mpeg" src="' + jsonvastus.mp3 + '" />';
    uusaudio = jQuery('<audio>'+sourcewav+sourcemp3+'</audio>');
    jQuery('body').append(uusaudio);
    uusaudioid = jsonvastus.mp3;
    uusaudio.attr('id', uusaudioid);
    uusaudio.attr('autoplay', 'true');
  }
});
