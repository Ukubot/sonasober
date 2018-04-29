<?php
?>
<head>
    <!-- Hotjar Tracking Code for https://mina.sonasober.ee/ -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:863033,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="lugeja.js"></script>
  <script src="scripts.js"></script>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="mobile.css">
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
    
<script>

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)
    [0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-116928146-1', 'auto') ; 

    ga('send', 'pageview');

  </script>

</head>

<body>
  <div id="container">
      <div id="content">
        <div id="app-view">
        <div id="topic-menu" class="topicmenu-container">
          <div id="upClick" class="arrow arrow__arrow-up autoclick">
            <i class="fas fa-arrow-up"></i>
        </div>
          <div  class="topicmenu-inner alt_font">
              
              <?php $textElement = "Tegevused"; $idElement = "activities"; $cardElement = "topicmenu-element__activities"; $imageElement = "activities.svg"; include 'menuelement.html'?>
              <?php $textElement = "Emotsioonid"; $idElement = "emotions"; $cardElement = "topicmenu-element__emotions"; $imageElement = "emotions.svg"; include 'menuelement.html'?>
              <?php $textElement = "Ilm"; $idElement = "weather"; $cardElement = "topicmenu-element__weather"; $imageElement = "weather.svg"; include 'menuelement.html'?>
              <?php $textElement = "Käsud"; $idElement = "commands"; $cardElement = "topicmenu-element__commands"; $imageElement = "commands.svg"; include 'menuelement.html'?>
              <?php $textElement = "Hügieen"; $idElement = "hygiene"; $cardElement = "topicmenu-element__hygiene"; $imageElement = "hygiene.svg"; include 'menuelement.html'?>
              <?php $textElement = "Tervis"; $idElement = "health"; $cardElement = "topicmenu-element__health"; $imageElement = "health.svg"; include 'menuelement.html'?>
              <?php $textElement = "Loomad"; $idElement = "animals"; $cardElement = "topicmenu-element__animals"; $imageElement = "animals.svg"; include 'menuelement.html'?>
              <?php $textElement = "Kohad"; $idElement = "places"; $cardElement = "topicmenu-element__places"; $imageElement = "places.svg"; include 'menuelement.html'?>
              <?php $textElement = "Riietus"; $idElement = "clothes"; $cardElement = "topicmenu-element__clothing"; $imageElement = "clothing.svg"; include 'menuelement.html'?>
              <?php $textElement = "Köögi toimingud"; $idElement = "kitchen-activities"; $cardElement = "topicmenu-element__activities"; $imageElement = "kitchen-activities.svg"; include 'menuelement.html'?>
              <?php $textElement = "Söök ja jook"; $idElement = "foodanddrink"; $cardElement = "topicmenu-element__foodanddrink"; $imageElement = "foodanddrink.svg"; include 'menuelement.html'?>
              <?php $textElement = "Liikumine"; $idElement = "movement"; $cardElement = "topicmenu-element__movement"; $imageElement = "movement.svg"; include 'menuelement.html'?>
              <?php $textElement = "Kool"; $idElement = "school"; $cardElement = "topicmenu-element__school"; $imageElement = "school.svg"; include 'menuelement.html'?>
              <?php $textElement = "Keha"; $idElement = "body"; $cardElement = "topicmenu-element__body"; $imageElement = "body.svg"; 
              include 'menuelement.html'?>
              <?php $textElement = "Tehnika"; $idElement = "technics"; $cardElement = "topicmenu-element__technics"; $imageElement = "technics.svg"; include 'menuelement.html'?>
              <?php $textElement = "Transport"; $idElement = "transport"; $cardElement = "topicmenu-element__transport"; $imageElement = "transport.svg"; include 'menuelement.html'?>
              <?php $textElement = "Omadussõnad"; $idElement = "adjectives"; $cardElement = "topicmenu-element__adjectives"; $imageElement = "adjectives.svg"; include 'menuelement.html'?>
              <?php $textElement = "Inimesed"; $idElement = "people"; $cardElement = "topicmenu-element__people"; $imageElement = "people.svg"; include 'menuelement.html'?>
              
              
          </div>
          <div id="downClick" class="arrow arrow__arrow-down autoclick">
            <i class="fas fa-arrow-down"></i>
        </div>
        </div>
        <div id="word-cards" class="middle-container">
          <header id="topmenu-container">
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
     <audio id="audiocontainer" hidden controls="" autoplay=""></audio>
      </div>
  </div>
</body>

<?php
?>
