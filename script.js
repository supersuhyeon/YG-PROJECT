//jquery

$(document).ready(function(){
  
     $(".main-menu>li").hover(function(){
       
       $(".subWrap").stop().slideDown(400)
       
     }, function(){
       $(".subWrap").stop().slideUp(600)
     })
     
     $(".subWrap").hover(
      function() {
        $(".subWrap").stop().slideDown(400);
      },
      function() {
        $(".subWrap").stop().slideUp(600);
      }
    );
     
     $("main .slider").bxSlider({
        captions: true,
        auto : true,
        speed : 500,
        autoHover : false //슬라이드에 마우스올렸을때 자동전환 멈춤
     });
    
    });


//vanila javascript


//new Swiper(선택자,옵션)
    new Swiper('.notice-line .swiper-container', {
      direction : 'vertical',
      autoplay : true,
      loop: true
    })