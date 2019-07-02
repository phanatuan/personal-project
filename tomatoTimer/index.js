let buttons = document.getElementsByClassName("btn");
let clock = document.getElementById("clock");

const buttonAction = value => {
  switch (true) {
    case value === "Reset":
      clock.innerHTML = "00:00";
      break;

    case value === "Stop":
      console.log("Stop");
      break;

    case value === "Start":
      console.log("Start");
      setTimeout(() => {
          
      }, 1000);
      break;

    default: 
      break;
  }
};

const tick = () => {
  console.log("I am ticking");
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", e => buttonAction(e.target.innerHTML));
}
