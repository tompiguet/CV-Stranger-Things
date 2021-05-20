
document.querySelector('body').addEventListener('click',
    function () {
        document.querySelector(".up").classList.add("reduced_up");
        document.querySelector(".down").classList.add("reduced_down");
        document.querySelector(".fond").classList.add("fond2");
        document.querySelector(".fond").classList.add("parallax");
    })




document.querySelector('body').addEventListener("click", function () {
    setTimeout(function () {
        document.querySelector(".up").style.display = "none";
        document.querySelector(".down").style.display = "none";
        document.querySelector(".presentation").style.display = "block";
        document.querySelector(".fond2").style.position = "relative";
        document.querySelector(".parcours").style.display = "block";

    }, 1500);
});



//Disparition du texte au scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".st").style.fontSize = "0px";
        document.querySelector(".firstLetterTop").style.fontSize = "0px";
        document.querySelector(".lastLetterTop").style.fontSize = "0px";
        document.querySelector(".st-bound-top").style.width = "0%";
        document.querySelector(".st-bound-bot").style.width = "0%";
    } else {
        document.querySelector(".st").style.fontSize = "80px";
        document.querySelector(".firstLetterTop").style.fontSize = "120px";
        document.querySelector(".lastLetterTop").style.fontSize = "120px";
        document.querySelector(".st-bound-top").style.width = "100%";
        document.querySelector(".st-bound-bot").style.width = "100%";
    }

    if (document.documentElement.scrollTop > 400) {
        document.querySelector("#subOne").style.width = "100%";
    } else {
        document.querySelector("#subOne").style.width = "0%";
    }

    if (document.documentElement.scrollTop > 1000) {
        document.querySelector("#subTwo").style.width = "100%";
        document.querySelector(".parcoursBlack").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        document.querySelector("#subTwo").style.width = "0%";
        document.querySelector(".parcoursBlack").style.backgroundColor = "rgba(0, 0, 0, 0)";

    }

}



document.querySelector(".profilPicture").addEventListener("mouseover", function () {
    this.style.backgroundImage  = "url('../img/phototom.jpg')";
});

