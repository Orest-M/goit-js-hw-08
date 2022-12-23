import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = player.on('timeupdate', () => {});

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    localStorage.setItem(
      'videoplayer-current-time',
      Math.round(JSON.stringify(seconds))
    );
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// localStorage.setItem('videoplayer-current-time', JSON.stringify('user'));
// const response = localStorage.getItem('videoplayer-current-time');

// console.log(JSON.parse(response));
