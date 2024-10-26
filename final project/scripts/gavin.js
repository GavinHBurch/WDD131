function mobileAdjust() {
    let w = Number(document.documentElement.clientWidth);

    if (w > 700) {
        document.getElementById("image-src").innerHTML = `<img src="./images/gavin.jpg" 
                                             alt="Gavin Burch" height="480" align="left">`;
    } else {
        document.getElementById("image-src").innerHTML = `<img src="./images/gavin.jpg" 
        alt="Gavin Burch" height="240" align="left">`;
    };
}
 
window.addEventListener("resize", mobileAdjust);

mobileAdjust();