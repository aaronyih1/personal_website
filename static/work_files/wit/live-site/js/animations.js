 $(document).ready(function() {
 
    $('.faq_question').click(function() {
 
        if ($(this).parent().is('.open')){
            $(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},100);
            $(this).closest('.faq').removeClass('open');
            $(this).children('#menu-triangle').rotate({duration:1, animateTo:0, easing: $.easing.easeInOutElastic});
 
            }else{
                var newHeight =$(this).closest('.faq').find('.faq_answer').height() +'px';
                $(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},100);
                $(this).closest('.faq').addClass('open');
                $(this).children('#menu-triangle').rotate({duration:1, animateTo:90, easing: $.easing.easeInOutElastic});
            }
 
    });
});

 var divs = $('h1[id^="content-"]').hide(),
     i = 0;

 (function cycle() { 

     divs.eq(i).fadeIn(900)
               .delay(6000)
               .fadeOut(900, cycle);

     i = ++i % divs.length;

 })();

 var divs2 = $('p[id^="design-description-"]').hide(),
     j = 0;

 (function cycle() { 

     divs2.eq(j).fadeIn(900)
               .delay(6000)
               .fadeOut(900, cycle);

     j = ++j % divs2.length;

 })();

 var divs3 = $('img[id^="image-"]').hide(),
     k = 0;

 (function cycle() { 

     divs3.eq(k).fadeIn(900)
               .delay(6000)
               .fadeOut(900, cycle);

     k = ++k % divs3.length;

 })();