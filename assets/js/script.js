scroll();
document.onkeydown = (e) => {
    if (e.key == 's') scroll();
};
function scroll() {
    document.documentElement.scrollTo({
        top: document.querySelector("footer").offsetTop,
    });
};