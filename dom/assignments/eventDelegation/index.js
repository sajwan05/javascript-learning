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