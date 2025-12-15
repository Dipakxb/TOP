const container = document.querySelector(".container");
const para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.cssText= "color: red";

const headingThird = document.createElement("h3");
headingThird.textContent = "I’m a blue h3!"
headingThird.style.cssText = "color: blue"

const div = document.createElement("div");

const headingOne = document.createElement("h1");
headingOne.textContent = "I’m in a div";

const divPara = document.createElement("p");
divPara.textContent = "ME TOO";

div.appendChild(headingOne);
div.appendChild(divPara);


container.appendChild(para);
container.appendChild(headingThird);
container.appendChild(div)




