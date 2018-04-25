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


/// Make two files and send them to queue
function makeAudioList(soundFile, soundFile2){
    
    audio1 = "psv/" + soundFile + ".wav";
    audio2 = "psv/" + soundFile2 + ".wav";
    
    new Mp3Queue(audiocontainer, [audio1,audio2]
)};

    
    
    var container = document.getElementById('audiocontainer');
    
    var Mp3Queue = function(container, files) {
        var index = 1;
        if(!container || !container.tagName || container.tagName !== 'AUDIO')throw 'Situ pihku';
        if(!files || !files.length)throw 'Invalid files array';        
        
        var playNext = function() {
            if(index < files.length) {
                container.src = files[index];
                index += 1;
            } else {
                container.removeEventListener('ended', playNext, false);
            }
        };
        
        container.addEventListener('ended', playNext);
        
        container.src = files[0];
    };


// Getting data from the JSON file and making word-element components with the information
//calling out topicmenu loader
$(function(){
    $('.topicmenu-element').click(function(){
        var clickedID = $(this).attr('id');
        var html = '';
        $.getJSON("mydata.json", function(data){
            $.each(data, function(key, value){
                var sound = '\'' +value.sound+ '\'';
                var sound2 = '\'' +value.sound2+ '\'';
                if(value.category === clickedID) {
                  html += '<div id="'+value.category+'" class="category-filter">';
                  html += '<div id="'+value.id+'" class="word-element img-button" value="'+value.name+'" onclick="makeAudioList ('+sound+','+sound2+')">';
                  html += '<div class="word-element-inner">';
                  html += '<img src="images/'+value.image+'.png"/>';
                  html += '<div class="image-title">'+value.name+'</div>';
                  html += '</div></div></div>';
                };
            });
            visiontracker();
            $('#wordcontainer').html(html);
            $(".category-filter").addClass("hide");
            $("#places.category-filter").removeClass("hide");
            $(".word-element").click(function(){
                $('#kuulatekst').val($('#kuulatekst').val()+$(this).attr("value")+" ");
            });
        });
    });
});

// Choose animal topic when app is started
function chooseFirstCategory(){
    $('#animals').trigger("click");
}

// Clear input if clear input button is clicked
$(function(){
  $('#clearInput').click(function(){
    $('#kuulatekst').val(' ');
  });
});

// Topic menu element background color is set as main container background
$(function(){
    $('.topicmenu-element').click(function(){
        var bgImage = $(this).find('.topicmenu-element-inner__card-bg').attr('class').split(' ').pop(1);
        $("#app-view").removeClass();
        $("#app-view").addClass(bgImage);
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

// call out first topic selection
$(function(){
    chooseFirstCategory();
});
