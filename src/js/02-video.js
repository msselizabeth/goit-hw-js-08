import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
    
const player = new Player(iframe);

player.on('timeupdate', 
throttle(function({seconds}){
    localStorage.setItem('videoplayer-current-time', seconds);
} , 1000)
);

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  };