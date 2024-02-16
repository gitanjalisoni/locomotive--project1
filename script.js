function loading(){
    var tl = gsap.timeline()
tl.to("#golden1", {
    top: "-100%",
    delay: 0.5,
    duration:0.7,
    ease:"expo.out"
})
tl.from("#golden2", {
    top:"100%",
    delay:0.6,
    duration:0.7,
    ease:"expo.out"
},"anim")
tl.to("#loader h1", {
    duration: 0.7,
    delay: 0.6,
    color:"black"
},"anim")
tl.to("#loader", {
    opacity:0
})
tl.to("#loader", {
    display:"none"
})
}
loading()
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img")
        page2.computedStyleMap.backgroundImage = `url(${bgimg})`
    })
})