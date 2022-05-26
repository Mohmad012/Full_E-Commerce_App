const handelTitle = (title) => {
    document.title = title
}

function Addshrink() {
    let RelBanner = document.querySelector("#banner");

    window.addEventListener("scroll", e => {
        if(window.pageYOffset > 86){
          RelBanner.classList.add("shrink");
        }else
        {
            RelBanner.classList.remove("shrink");
        }
    });
}

const moveSmooth = () => {
  window.scrollTo({
    behavior: "smooth"
  });
};

function loader() {
    let fadeTarget = document.getElementById("preloader");

    function fadeOutEffect() {
        
        var fadeEffect = setInterval(function () {
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none'
            }
        }, 100);
    }

    window.onload = setTimeout(fadeOutEffect , 1000)
}

export {
    handelTitle,
    Addshrink,
    moveSmooth,
    loader
};
