//
//
//  WORK ON ADDING THIS: https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/
//
//

// create buttons
const buttonOne = document.createElement("button");
const leftCol = document.querySelector('#leftHand')
const buttonTwo = document.createElement("button");
const rightCol = document.querySelector('#rightHand')
// add buttons to DOM
leftCol.appendChild(buttonOne);
rightCol.appendChild(buttonTwo);
// add button text
buttonOne.innerHTML = "Me";
buttonTwo.innerHTML = "Food";


// buttonOne style
buttonOne.style.fontSize = "30px";
buttonOne.style.backgroundColor = "teal";
buttonOne.style.color = "whitesmoke";
buttonOne.style.borderRadius = "15px";
buttonOne.style.padding = "6%";
buttonOne.style.border = "none";
// buttonTwo style
buttonTwo.style.fontSize = '30px';
buttonTwo.style.backgroundColor = 'navy';
buttonTwo.style.color = 'whitesmoke';
buttonTwo.style.borderRadius = "15px";
buttonTwo.style.padding = "6%";
buttonTwo.style.border = "none";

// buttonOne hover style
buttonOne.addEventListener("mouseover", function () {
  buttonOne.style.cursor = "pointer";
  buttonOne.style.backgroundColor = 'slategray';
});
buttonOne.addEventListener("mouseout", function() {
  buttonOne.style.backgroundColor = 'teal';
})

// buttonTwo hover style
buttonTwo.addEventListener("mouseover", function () {
  buttonTwo.style.cursor = "pointer";
  buttonTwo.style.backgroundColor = 'slategray';
});
buttonTwo.addEventListener("mouseout", function() {
  buttonTwo.style.backgroundColor = 'navy';
})

// buttonOne click
buttonOne.addEventListener("click", function () {
  var element = document.getElementById("bannerOne");
  if (typeof element != "undefined" && element != null) {
    element.parentNode.removeChild(element);
  } else {
    const bannerOne = document.createElement("div");
    const leftInfo = document.querySelector('#leftInfo')
    bannerOne.setAttribute("id", "bannerOne");
    leftInfo.appendChild(bannerOne);
    bannerOne.innerText = "Myriah Nottage";

    // bannerOne style
    bannerOne.style.height = "20rem";
    bannerOne.style.width = "10rem";
    bannerOne.style.backgroundColor = "midnightblue";
    bannerOne.style.display = "flex";
    bannerOne.style.justifyContent = "center";
    bannerOne.style.paddingTop = "10%";
    bannerOne.style.paddingLeft = "auto";
    bannerOne.style.paddingRight = "auto";
    bannerOne.style.marginTop = "5px";
    bannerOne.style.color = "whitesmoke";
  }
});

// buttonTwo click
buttonTwo.addEventListener("click", function () {
  var element = document.getElementById("bannerTwo");
  if (typeof element != "undefined" && element != null) {
    element.parentNode.removeChild(element);
  } else {
    const bannerTwo = document.createElement("div");
    const rightInfo = document.querySelector('#rightInfo')
    bannerTwo.setAttribute("id", "bannerTwo");
    rightInfo.appendChild(bannerTwo);
    bannerTwo.innerText = "Thai cucumber salad on a hot day";

    // bannerTwo style
    bannerTwo.style.height = "20vh";
    bannerTwo.style.width = "20vw";
    bannerTwo.style.backgroundColor = "forestgreen";
    bannerTwo.style.display = "flex";
    bannerTwo.style.justifyContent = "center";
    bannerTwo.style.paddingTop = "10%";
    bannerTwo.style.paddingLeft = "auto";
    bannerTwo.style.paddingRight = "auto";
    bannerTwo.style.margin = "5px";
    bannerTwo.style.color = "whitesmoke";
  }
});
