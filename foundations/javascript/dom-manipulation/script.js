const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");

paragraph.textContent = "Hey I'm red";

paragraph.style.color = "red";

container.appendChild(paragraph);

const headerThree = document.createElement("h3");

headerThree.textContent = "I'm a blue h3";

headerThree.style.color = "blue";

container.appendChild(headerThree);

const containerTwo = document.createElement("div");

containerTwo.style.border = "2px solid black";

containerTwo.style.backgroundColor = "pink";

const headerOne = document.createElement("h1");

headerOne.textContent = "I'm in a div";

containerTwo.appendChild(headerOne);

const paragraphTwo = document.createElement("p");

paragraphTwo.textContent = "ME TOO!";

containerTwo.appendChild(paragraphTwo);

container.appendChild(containerTwo);

