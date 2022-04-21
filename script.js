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
    });

    new Swiper('.musicslider .swiper-container', {

      slidesPerView : 3,
      spaceBetween : 100, //슬라이드 사이 여백
      centeredSlides : true,
      loop:true,
      autoplay: {
        delay:5000
      },
      pagination: {
        el: '.musicslider .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true
      },
      navigation: {
        prevEl: '.musicslider .swiper-prev', //이전슬라이드보는버튼
        nextEl: '.musicslider .swiper-next' //다음슬라이드보는버튼
      }


    });


    AOS.init();