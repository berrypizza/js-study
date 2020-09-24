const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const hours = date.getMinutes();
  const minuTes = date.getHours();
  const secounds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minuTes < 10 ? `0${minuTes}` : minuTes
  }:${secounds < 10 ? `0${secounds}` : secounds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
