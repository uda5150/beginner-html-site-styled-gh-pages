const myImage = document.querySelector('img');

myImage.onclick = () => {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

setUserName = () => {
  const myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is Cool ' + myName
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozila is Cool ' + storedName;
}

myButton.onclick = () => {
  setUserName();
}