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

// Moving and removing elements
// let's suppose we wanted to move the paragraph with link to the end of the section 

section.appendChild(linkPara);

para.cloneNode(true);
section.insertBefore(para.cloneNode(true), linkPara);

// removing node

section.removeChild(para);
linkPara.remove();

