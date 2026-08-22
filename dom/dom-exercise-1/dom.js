const container = document.querySelector("#container");

const para = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");

const h1 = document.createElement("h1");
const p = document.createElement("p");

para.textContent = "Hey I'm red!";
para.setAttribute('style', "color: red;");

h3.textContent = "I'm blue h3!";
h3.style.color = "blue";

container.appendChild(para);
container.appendChild(h3);

div.setAttribute("style", "background: pink; border: 2px solid black; padding: 0.5rem 0.8rem;");

h1.textContent = "I'm in a div!";
p.textContent = "ME TOO!";

container.appendChild(div);

div.appendChild(h1);
div.appendChild(p);