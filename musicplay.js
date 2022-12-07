let play = document.querySelector('#play');
let music = document.querySelector('audio');
let isplay = false;
let song_no = document.querySelector('h3');
let song_name = document.querySelector('h2');
let songcount = 0;
let image = document.querySelector('#img');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let body = document.querySelector('body');
let progress = document.querySelector('.second_line');



// progress work

// for play function
const playmusic = () => {
        isplay = true;
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
};
// for pause function
const pausemusic = () => {
        isplay = false;
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
};
play.addEventListener('click', () => {
        if (isplay) {
                pausemusic();
        } else {
                playmusic();
        }

});
let musiclist = [
        {
                songno: "01",
                songname: "shiddat",
                src: "music/music.mp3",
                imagesrc: "music.jpg",
                background: "rgba(58, 3, 3, 0.932)"
        },
        {
                songno: "02",
                songname: "doraemon",
                src: "music/doraemon.mp3",
                imagesrc: "doraemon.jpg",
                background: "rgb(225,225,255)"
        },
        {
                songno: "03",
                songname: "ninja hathori",
                src: "music/ninja.mp3",
                imagesrc: "hathori.jpg",
                background: "rgb(0,255,0,.4)"
        },
];
const loadmusic = () => {
        song_no.innerText = musiclist[songcount].songno;
        song_name.innerText = musiclist[songcount].songname;
        music.src = musiclist[songcount].src;
        image.src = musiclist[songcount].imagesrc;
        body.style.background = musiclist[songcount].background;
}
loadmusic();

const nextbtn = () => {
        songcount++;
        loadmusic();
        playmusic();
};
const previous = () => {
        songcount--;
        loadmusic();
        playmusic();
};
let tymefrist = document.querySelector('#tymefrist');
let tymelast = document.querySelector('#tymelast');
music.addEventListener('timeupdate', (event) => {
        const { currentTime, duration } = event.srcElement;
        let progress_time = (currentTime / duration) * 100;
        progress.style.width = `${progress_time}%`

        if (progress.style.width == `${progress_time}%`) {
             nextbtn();
        }    
    
      //audio time update     

        let min_duration = Math.floor(duration / 60);
        let sec_duration = Math.floor(duration % 60);
       
        let total_duration = `${min_duration}:${sec_duration}`
       if (duration) {
        tymelast.innerText=`${total_duration}`        
       }

       // audio frist time update
       
       let min_currentTime = Math.floor(currentTime / 60);
       let sec_currentTime = Math.floor(currentTime % 60);
      
       let total_currentTime = `${min_currentTime}:${sec_currentTime}`
      if (currentTime) {
        tymefrist.innerText=`${total_currentTime}`        
      }
      
});
 const line = document.querySelector('.line');
 line.addEventListener('click', setProgress);      

 function setProgress(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = music.duration
      
        music.currentTime = (clickX / width) * duration;
      playmusic();      
}

prev.addEventListener('click', previous)
next.addEventListener('click', nextbtn)


