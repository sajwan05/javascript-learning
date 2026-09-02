const home = document.querySelector(".home");
const dashboard = document.querySelector(".dashboard");
const report = document.querySelector(".report");

home.addEventListener("click", (event) => {
    console.log("Home menu was clicked!");
});

dashboard.addEventListener("click", (event) => {
    console.log("dashboard menu was clicked!");
});

report.addEventListener("click", (event) => {
    console.log("report menu was cliked!");
});

const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
    let target = event.target;
    
    switch(target.classList.value){
        case 'home':
            console.log("home menu is clicked! via delegation");
            break;
        case 'dashboard':
            console.log("event delegation: dashboard is clicked!");
            break;
        case 'report':
            console.log("event delegation: report menu was clicked!");
    }
});