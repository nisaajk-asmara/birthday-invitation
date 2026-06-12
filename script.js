const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

document.querySelector(".cover").style.display = "none";

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("hidden");
});

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const music = document.getElementById("music");

document.getElementById("playMusic").addEventListener("click",()=>{

if(music.paused){
music.play();
}else{
music.pause();
}

});