// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    videoId: 'GMR3RUAz_pE',
    playerVars: {
        autoplay: true,
        loop:true,
        playlist: 'GMR3RUAz_pE'
    },
    events:{
        onReady: function(event){
            event.target.mute() // 음소거
        }
    }
  });
}


//1.고정을 시작할 영역의 좌표값구하기
//2. 스크롤이 지정해놓은 좌표값을 넘어갈때 클래스주기 (window.scrollY >= 좌표 값)


//내용:
//문서 내에서 렌더링 된 엘리먼트의 절대 위치를 계산해야 한다면,
//getBoundingClientRect() 메서드를 사용해 윈도우 기준으로 렌더링 된 위치를 가져온 후에,
//문서의 스크롤 값을 더해주면 된다.
//clientRect 는 윈도우에서의 상대적인 위치이기 때문에,
//특정 엘리먼트의 정확한 'offset()' 선택좌표를 가져오려면 윈도우의 스크롤 된 위치를 가져와야 한다.
//스크롤이 얼마나 되었는지는 `window.scrollY` 속성으로 가져올 수 있다.


// //arttitlebox 고정시키고 artimgbox는 스크롤
const groupBox = document.querySelector('.groupbox')
const artTitleBox = document.querySelector('.arttitlebox')

// // // 그룹박스의 상대적 위치와 그에 대한 스크롤값 = groupBoxTop
const groupBoxTop = groupBox.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    // console.log(groupBox.getBoundingClientRect.top)
    if(window.scrollY >= groupBoxTop){
        artTitleBox.classList.add('fixed')
        
}else{
        artTitleBox.classList.remove('fixed')
    }
});

const openBtn = document.getElementById('modalACMU');
//onModal button

const closeBtn = document.getElementById('close');
//offModal button

const modal = document.querySelector('.modal');
//HTML에서의 모달 최상위 요소

const overlay = document.querySelector('.modal__overlay');
//모달창이 활성화되면 흐린 배경을 표현하는 요소

const openModal = () => {
  modal.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
}
openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
//모달창 내부의 닫기 버튼

overlay.addEventListener('click', closeModal);
//모달창 영역 밖


// <!-- Initialize Swiper -->

  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  