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
          display : 'none' //오파시티는 안보이게만해줌. 기능자체를 없애줘야함
          
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

