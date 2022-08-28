import Player from "@vimeo/player";

import debounce from "lodash/throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on(
  "timeupdate",
  new debounce(writeToStorage, 1000, { leading: true, trailing: false })
);

function writeToStorage({ seconds }) {
  console.log(seconds);
  localStorage.setItem("videoplayer-current-time", seconds);
}

player.on("ended", clearStorageTime);

function clearStorageTime() {
  localStorage.removeItem("videoplayer-current-time");
  player.off("timeupdate");
}
const getStorageTime = localStorage.getItem("videoplayer-current-time");

player
  .setCurrentTime(getStorageTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
