const myImage = document.querySelector('img');
const myHedding = document.querySelector('h1');

myImage.onclick = () => {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/firefox2.png');
    myHedding.textContent = 'Twitter is cool';
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
    myHedding.textContent = 'Mozilla is cool';
  }
}