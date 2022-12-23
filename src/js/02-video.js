import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('timeupdate', onTimeUpdate());

// const onTimeUpdate = () => {};

localStorage.setItem('videoplayer-current-time', JSON.stringify('user'));
const response = localStorage.getItem('videoplayer-current-time');

console.log(JSON.parse(response));
