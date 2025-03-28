let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/moon.jpg") {
    myImage.setAttribute("src", "../images/plant.jpg");
  } else {
    myImage.setAttribute("src", "../images/moon.jpg");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
