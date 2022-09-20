
function changeSection(name, path){
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    document.getElementById(name).classList.add("selected");
    loadView(path);
}

document.addEventListener("DOMContentLoaded", function(){
    //loadView("home.html");
    loadView("projects.html");
});
