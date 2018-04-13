
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
var playSound = function(soundFile) {
  $("#sound").html("<embed src=\"psv/" + soundFile + ".wav" + "\" hidden=\"true\" autostart=\"true\" />");
};

//Getting data from the JSON file and making word-element components with the information
$(function() {
  $.getJSON("mydata.json", function(data) {
    var html = '';
    $.each(data, function(key, value){
      var sound = '\''+value.sound+ '\'';
      html += '<div id="'+value.category+'" class="category-filter">';
      html += '<div id="'+value.id+'" class="word-element img-button" value="'+value.name+'" onclick="playSound('+sound+')">';
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
