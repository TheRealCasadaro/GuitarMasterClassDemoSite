document.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener("load", function(e){

        this.document.body.style.diplay = "block"
        let tl = new TimelineMax();
        
        tl.staggerFrom('section', 2, {
            opacity: 0,
            scale: .2,
            ease: Power2.easOut
        }, 0.5)
        
        tl.staggerFrom('h1, h2', .5, {
            opacity: 0,
            y: -40,
            ease: Power2.easInOut
        }, 0.2, "-=2")
        
        tl.staggerFrom('.anim-pannel', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easInOut
        }, 0.2, "-=1.5")

        tl.staggerFrom('.logo, nav', 1.5, {
            opacity: 0,
            y: -40,
            ease: Power2.easInOut
        }, 0.2, "-=1.5")
    }, false)
})
