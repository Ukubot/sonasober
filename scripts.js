

//Feature to click elements only by hovering at them / looking at them
function visiontracker(){
  var delay=3000, setTimeoutConst;
  $('.word-element, .topicmenu-element, #clearInput, #kuulatekst, #kuulaklikk, .autoclick').hover(function() {
    var visiontarget= $(this);
     setTimeoutConst = setTimeout(function(){
      visiontarget.trigger("click");
     }, delay);
},function(){
     clearTimeout(setTimeoutConst );
})
};

//A element on the site that plays the sounds we feed it
var playSound = function(soundFile,soundFile2) {
  $("#sound").html("<embed src=\"psv/" + soundFile + ".wav" + "\" hidden=\"true\" autostart=\"true\" />");
    
};


function playAudio(soundFile, soundFile2){
    
    var audio =  soundFile;
    var audio2 = soundFile2;
    
    if(audio2 !== undefined){
        
        
        $.playSound(audio);
        
        $("#sound").addEventListener('ended', function() {
            $.playSound(audio2);
        });
    }
    
    
    //audio1.onended();
    //var audio2 = $("#sound2").html("<embed src=\"psv/" + soundFile2 + ".wav" + "\" hidden=\"true\" />");  
};

//audio2.pause();
    






//(function(callback){ console.log(callback.toString()); })(playTwoSounds);

//Getting data from the JSON file and making word-element components with the information
$(function() {
  $.getJSON("mydata.json", function(data) {
    var html = '';
    
    $.each(data, function(key, value){
    
            var sound = '\'' +value.sound+ '\'';
            console.log(sound);
            var sound2 = '\'' +value.sound2+ '\'';
            console.log(sound2);
        
      html += '<div id="'+value.category+'" class="category-filter">';
      
      html += '<div id="'+value.id+'" class="word-element img-button" value="'+value.name+'" onclick="playSound('+sound+','+sound2+')">';
      html += '<div class="word-element-inner">';
      html += '<img src="images/'+value.image+'.png"/>';
      html += '<div class="image-title">'+value.name+'</div>';
      html += '</div></div></div>';
    });
    $('#wordcontainer').html(html);
    visiontracker();
    $(".category-filter").addClass("hide");
    $("#places.category-filter").removeClass("hide");
    $(".word-element").click(function(){
        $('#kuulatekst').val($('#kuulatekst').val()+$(this).attr("value")+" ");
    });
  });
});

// Clear input if clear input button is clicked
$(function(){
  $('#clearInput').click(function(){
    $('#kuulatekst').val(' ');
  });
});

//A current hackish way how to deal with topic changes. - TODO Rework later
$(function(){
  $('#places.topicmenu-element').click(function(){
    $(".category-filter").addClass("hide");
    $(".app-view").addClass("places-bg");
    $(".app-view").removeClass("animals-bg");
    $("#places.category-filter").removeClass("hide");
  });

  $('#animals.topicmenu-element').click(function(){
    $(".category-filter").addClass("hide");
    $(".app-view").addClass("animals-bg");
      $(".app-view").removeClass("places-bg");
    $("#animals.category-filter").removeClass("hide");
  });
});

//HIDE TOP ARROW WHEN SCROLLED TO TOP
$(function(){
$(".arrow__arrow-up").hide();
$('div#topic-menu').scroll(function() {    
    var scroll = $('div#topic-menu').scrollTop();
    if (scroll == 0) {
        $(".arrow__arrow-up").hide();
    }
    
    else {
        $(".arrow__arrow-up").show();
    }
});

});

// STICKY MENU WHEN SROLLED
$(function(){
$('div#word-cards').scroll(function() {    
    var scroll = $('div#word-cards').scrollTop();
    if (scroll >= 50) {
        $(".topmenu-container").addClass("topmenu-container-fixed");
    }
    
    else {
        $(".topmenu-container").removeClass("topmenu-container-fixed");
    }
});

});


// Arrows for scrolling topic elements up and down
$(function(){
  var scrolled=0;
    $("#downClick").on("click" ,function(){
                scrolled=scrolled+200;
				$(".topicmenu-container").animate({
				        scrollTop:  scrolled
				   });
			});

    $("#upClick").on("click" ,function(){
				scrolled=scrolled-200;
				$(".topicmenu-container").animate({
				        scrollTop:  scrolled
				   });
			});
});


// $(function() {
// $('.topicmenu-element').click(function(){
//   console.log($(this).attr("id"));
//   console.log($(".category-filter").attr("id"));
//      $('.category-filter').each(function() {
//     if($(this).attr("id") != $(".category-filter").attr("id")) {
//       $(".category-filter").addClass("hide");
//     }
//     return false;
//   });
//   });
// });
