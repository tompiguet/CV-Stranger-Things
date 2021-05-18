
document.querySelector('body').addEventListener('click',
function () {
    document.querySelector(".up").classList.add("reduced_up");
    document.querySelector(".down").classList.add("reduced_down");
    document.querySelector(".fond").classList.add("fond2"); 
    document.querySelector(".fond").classList.add("parallax"); 
})




document.querySelector('body').addEventListener("click", function(){
    setTimeout(function(){
        document.querySelector(".up").style.display = "none";
        document.querySelector(".down").style.display = "none";
        document.querySelector(".CvPart1").style.display = "block";
        document.querySelector(".fond2").style.position = "relative";
        }, 1500);
});




