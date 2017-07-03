
//slider of new products

$(document).ready(function(ev){
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
      $('#custom_carousel .controls li.active').removeClass('active');
      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
});
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });

  //
});

//navbar

jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})

//dropdown hover
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var button=document.getElementById('test');
$("#test").click(function(){

$(".formq").toggle();

})
$("#result").click(function(){
$(".formq").hide();



})
var result = document.getElementById('result');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
result.onclick = function(){
      var test=$("#myImg").attr("src");
    modal.style.display = "block";
  
    modalImg.src = test;
   // captionText.innerHTML = test.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


$(window).scroll(function(){

if ($(this).scrollTop()>=400)
{
  $(".topbutton").show();
}

else

{
  $(".topbutton").hide();
}

})

$(".topbutton").click(function(){

$("html,body").animate({scrollTop:0},600);
})
  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
        //formq
            $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });

    
});


$(window).scroll(function(){


if ($(this).scrollTop()>=480)
{
$('.ad').css("position","fixed");
$('.ad').css("top","0");
$('.ad ').css("z-index","5");

$('.ad img').css("width","126%");
//$('#nav').css('width','95%');

}

else if($(this).scrollTop()<480)
{
$('.ad').css("position","relative");
$('.ad').css("top","0");
$('.ad img').css("width","90%");

}



})

$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});