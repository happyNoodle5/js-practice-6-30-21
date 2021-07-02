//
//
//  WORK ON ADDING THIS: https://css-tricks.com/getting-javascript-to-talk-to-css-and-sass/
//
//

// create button
const buttonOne = document.createElement("button");
// add button to DOM
document.body.appendChild(buttonOne);
// add button text
buttonOne.innerHTML = "Me";

// buttonOne style
buttonOne.style.fontSize = "30px";
buttonOne.style.backgroundColor = "teal";
buttonOne.style.color = "whitesmoke";
buttonOne.style.borderRadius = "15px";
buttonOne.style.padding = "6%";
buttonOne.style.border = "none";

// buttonOne hover style
buttonOne.addEventListener("mouseover", function () {
  buttonOne.style.cursor = "pointer";
  buttonOne.style.backgroundColor;
});

// buttonOne click
buttonOne.addEventListener("click", function () {
  // create bannerOne
  const bannerOne = document.createElement("div");
  document.body.appendChild(bannerOne);
  bannerOne.innerText = "Myriah Nottage";

  // bannerOne style
  bannerOne.style.height = '20vh';
  bannerOne.style.width = '20vw';
  bannerOne.style.backgroundColor = 'midnightblue';
  bannerOne.style.display = 'flex';
  bannerOne.style.justifyContent = 'center';
  bannerOne.style.paddingTop = '10%';
  bannerOne.style.marginTop = '5px';
  bannerOne.style.color = 'whitesmoke';
})

