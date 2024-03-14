let scrollContainer = document.querySelector('.BB');
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener('wheel',(e)=>{
    e.defaultPrevented();
    scrollContainer.scrollLeft +=e.deltaY;
    scrollContainer .style.scrollBehavior ='auto';
});

nextbtn.addEventListener("click", () =>{
    scrollContainer. style.scrollBehavior ='smooth';
    scrollContainer.scrollLeft +=50
});

backbtn.addEventListener("click", () =>{
    scrollContainer. style.scrollBehavior ='smooth';
    scrollContainer.scrollLeft -=50
});