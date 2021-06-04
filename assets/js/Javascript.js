


// En fonction de la taille de l'écran : affcher / cacher le rideau d'accueil
if (window.matchMedia("(max-width: 1000px)").matches) {
    document.querySelector(".presentation").style.display = "block";
    document.querySelector(".parcours").style.display = "block";
    document.querySelector(".competences").style.display = "block";
    document.querySelector(".contact").style.display = "block";
    document.querySelector("footer").style.display = "block";
    document.querySelector(".fond").style.position = "relative";



} else {

    document.querySelector('body').addEventListener('click',
        function () {
            document.querySelector(".up").classList.add("reduced_up");
            document.querySelector(".down").classList.add("reduced_down");
            document.querySelector(".fond").classList.add("parallax");
        })


    // Disparition des div de couverture et apparition des différentes parties du site après le click
    document.querySelector('body').addEventListener("click", function () {
        setTimeout(function () {
            document.querySelector(".up").style.display = "none";
            document.querySelector(".down").style.display = "none";
            document.querySelector(".presentation").style.display = "block";
            document.querySelector(".fond").style.position = "relative";
            document.querySelector(".parcours").style.display = "block";
            document.querySelector(".competences").style.display = "block";
            document.querySelector(".contact").style.display = "block";
            document.querySelector("footer").style.display = "block";

        }, 1500);
    });

}


//Disparition du titre au scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".st").style.fontSize = "0px";
        document.querySelector(".firstLetterTop").style.fontSize = "0px";
        document.querySelector(".lastLetterTop").style.fontSize = "0px";
        document.querySelector(".st-bound-top").style.width = "0%";
        document.querySelector(".st-bound-bot").style.width = "0%";
    } else {
        document.querySelector(".st").style.fontSize = "";
        document.querySelector(".firstLetterTop").style.fontSize = "";
        document.querySelector(".lastLetterTop").style.fontSize = "";
        document.querySelector(".st-bound-top").style.width = "";
        document.querySelector(".st-bound-bot").style.width = "";
    }


    // Animation sur l'intitulé "à propos de moi"
    if (document.documentElement.scrollTop > 200) {
        document.querySelector("#subOne").style.width = "100%";
        document.querySelector(".presentationBlack").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        document.querySelector("#subOne").style.width = "0%";
        document.querySelector(".presentationBlack").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    // Animation sur l'intitulé "mon parcours"
    if (document.documentElement.scrollTop > 800) {
        document.querySelector("#subTwo").style.width = "100%";
        document.querySelector(".parcoursBlack").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        document.querySelector("#subTwo").style.width = "0%";
        document.querySelector(".parcoursBlack").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }



    // Apparition des bordures sur les étapes du parcours
    if (document.documentElement.scrollTop > 900) {
        document.querySelector("#step1").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step1").classList.remove("parcoursBorder");
    }

    if (document.documentElement.scrollTop > 1200) {
        document.querySelector("#step2").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step2").classList.remove("parcoursBorder");
    }

    if (document.documentElement.scrollTop > 1500) {
        document.querySelector("#step3").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step3").classList.remove("parcoursBorder");
    }

    if (document.documentElement.scrollTop > 1800) {
        document.querySelector("#step4").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step4").classList.remove("parcoursBorder");
    }

    if (document.documentElement.scrollTop > 2100) {
        document.querySelector("#step5").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step5").classList.remove("parcoursBorder");
    }

    if (document.documentElement.scrollTop > 2200) {
        document.querySelector("#step6").classList.add("parcoursBorder");
    } else {
        document.querySelector("#step6").classList.remove("parcoursBorder");
    }


    // Animation sur l'intitulé "mon compétences"
    if (document.documentElement.scrollTop > 2500) {
        document.querySelector("#subThree").style.width = "100%";
        document.querySelector(".competencesBlack").style.backgroundColor = "rgba(0, 0, 0, 0.7)";

    } else {
        document.querySelector("#subThree").style.width = "0%";
        document.querySelector(".competencesBlack").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }


    // Animation sur l'intitulé "Contact"
    if (document.documentElement.scrollTop > 3000) {
        document.querySelector("#subFour").style.width = "100%";
    } else {
        document.querySelector("#subFour").style.width = "0%";
    }



}



// Hover sur la photo de profil
document.querySelector(".profilPicture").addEventListener("mouseover", function () {
    this.style.backgroundImage = "url('../img/phototom.jpg')";
});

