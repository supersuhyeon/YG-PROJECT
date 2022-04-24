 // 2. This code loads the IFrame Player API code asynchronously.
 let tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 let firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

// let player;
let player2;
// let player3;
// let player4;
// let player5;

 function onYouTubeIframeAPIReady() {
//   player = new YT.Player('ytplayer1', {
//      height: '446',
//      width: '800',    
//      videoId: 'ZJaKdBBzUYk'
    
//    });

   player2 = new YT.Player('ytplayer2',{
       height: '446',
       width : '800',
       videoId : 'awkkyBH2zEo'
   });

//    player3 = new YT.Player('ytplayer3',{
//     height: '446',
//     width : '800',
//     videoId: 'EtiPbWzUY9o'
//    });

//    player4 = new YT.Player('ytplayer4',{
//     height: '446',
//     width : '800',
//     videoId: 'VAEEblk-qDU'
//    });

//    player5 = new YT.Player('ytplayer5',{
//     height: '446',
//     width : '800',
//     videoId: 'eN5mG_yMDiM'
//    });
 }