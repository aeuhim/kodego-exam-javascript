var female = document.getElementById("female")
var headline1 = document.getElementById("headline1")
var headline2 = document.getElementById("headline2")
var subheadline = document.getElementById("subheadline")
var learnmore = document.getElementById("learnmore")
var logo = document.getElementById("logo")
var replay = document.getElementById("replay")

function fadeInFemale() {
    female.style.opacity = "1"
}
setTimeout(fadeInFemale, 1000)

function slideInHeadline1() {
    headline1.style.transform = "translateX(0%)"
}
setTimeout(slideInHeadline1, 1500)

function fadeOutFemale() {
    female.style.opacity = "0"
}
setTimeout(fadeOutFemale, 3000)

function slideInHeadline2() {
    headline2.style.transform = "translateX(0%) translateY(-20%)"
}
setTimeout(slideInHeadline2, 3500)

function growHeadline1() {
    headline1.style.transform = "scale(1.2)"
}
setTimeout(growHeadline1, 3750)

function shrinkHeadline1() {
    headline1.style.transitionDuration = "0.25s"
    headline1.style.transform = "scale(0.01)"
}
setTimeout(shrinkHeadline1, 4000)

function fadeInSubheadline() {
    subheadline.style.opacity = "1"
}
setTimeout(fadeInSubheadline, 4500)

function fadeInLearnmore() {
    learnmore.style.opacity = "1"
}
setTimeout(fadeInLearnmore, 5000)

function slideInLogo() {
    logo.style.transform = "translateX(70%) translateY(-15%)"
}
setTimeout(slideInLogo, 5500)

function fadeInReplay() {
    replay.style.opacity = "1"
}
setTimeout(fadeInReplay, 6000)

replay.addEventListener("click", () => {
    location.reload();
});
