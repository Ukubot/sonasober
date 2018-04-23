<?php
?>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="lugeja.js"></script>
  <script src="scripts.js"></script>
    <script src="custom.js"></script>
    <link rel="stylesheet" href="styles.css">
    <link href="/fonts/OpenDyslexic-Regular.otf">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">


    <style type="text/css">
@font-face {
    font-family: OpenDyslexic3-Regular;
    src: url("fonts/OpenDyslexic3-Regular.woff") format("woff"), url("path/OpenDyslexic3-Regular.ttf")  format("truetype");
}
</style>

    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116928146-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-116928146-1');
</script>

</head>

<body>
  <div id="container">
      <div id="content">
        <div class="app-view places-bg">
        <div id="topic-menu" class="topicmenu-container">
          <div id="upClick" class="arrow arrow__arrow-up autoclick">
            <i class="fas fa-arrow-up"></i>
        </div>
          <div  class="topicmenu-inner alt_font">
              <?php $textElement = "Loomad"; $idElement = "animals"; $cardElement = "topicmenu-element__animals"; $imageElement = "animals.svg"; include 'menuelement.html'?>
              <?php $textElement = "Kohad"; $idElement = "places"; $cardElement = "topicmenu-element__places"; $imageElement = "places.svg"; include 'menuelement.html'?>
              <?php $textElement = "Riietus"; $idElement = "clothes"; $cardElement = "topicmenu-element__clothing"; $imageElement = "clothing.svg"; include 'menuelement.html'?>
              <?php $textElement = "Tegevused"; $idElement = "activities"; $cardElement = "topicmenu-element__activities"; $imageElement = "activities.svg"; include 'menuelement.html'?>
              <?php $textElement = "Emotsioonid"; $idElement = "emotions"; $cardElement = "topicmenu-element__emotions"; $imageElement = "emotions.svg"; include 'menuelement.html'?>
          </div>
          <div id="downClick" class="arrow arrow__arrow-down autoclick">
            <i class="fas fa-arrow-down"></i>
        </div>
        </div>
        <div id="word-cards" class="middle-container">
          <header class="topmenu-container">
            <div class="input-container">
                <div class="input-container__input-area">
                <button class="input_container__btn-clear" id="clearInput">X</button>
                <input id="kuulatekst" name="speech" placeholder="Kirjuta siia"></input>
                <button class="input_container__btn-say alt_font" id="kuulaklikk" alt="Kuula teksti valitud häälega">Ütlen</button>
                </div>
            </div>
          </header>
          <div class="middle-inner">
              <div id="wordcontainer" class="alt_font"><div/>
          </div>
        </div>
      </div>
      </div>
      <div id="sound"></div>
      <div id="sound2"></div>
      </div>
  </div>
</body>

<?php
?>
