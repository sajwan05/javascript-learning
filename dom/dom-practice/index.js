console.log("Javascript");

const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org/en-US/";

const section = document.querySelector("section");

const para = document.createElement("p");
para.textContent ="We hope you enjoyed the ride.";

section.appendChild(para);

const linkPara = document.querySelector(".linkPara");

const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

linkPara.appendChild(text);

