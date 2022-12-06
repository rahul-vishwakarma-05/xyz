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
music.addEventListener('timeupdate',(event) =>{
    const{currentTime , duration} = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width =`${progress_time}%`

     if ( progress.style.width == "100%") {
            nextbtn();        
     }
});


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

prev.addEventListener('click',previous)
next.addEventListener('click',nextbtn)


