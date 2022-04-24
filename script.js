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


//swiper라이브러리
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



    //gsap 자바스크립트 애니메이션 라이브러리
    //gsap.to(요소를기준으로,지속시간,옵션추가)
    //_.throttle : 스크롤값 간단하게 보여주기 (함수,시간)

    const toTopEL = document.querySelector('#to-top');
    
    //스크롤이벤트
    window.addEventListener('scroll', _.throttle(function(){
      console.log(window.scrollY);
      if (window.scrollY > 500){
         //투탑숨기기
        //  toTopEL.style.display = 'block'

        gsap.to(toTopEL, .6, {
          opacity: 1,
          display : 'block'
          
        }); 
      } else{
        gsap.to(toTopEL, .6, {
          opacity: 0,
          display : 'none'
          
        })
        //투탑보이기
        // toTopEL.style.display = 'none'
      }
    },300))
    
    
    //클릭이벤트
    toTopEL.addEventListener('click', function(){
      gsap.to(window, .7, {
        scrollTo : 0
      })
    })


    