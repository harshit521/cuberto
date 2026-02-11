Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(
    ".hvr",{
        images: ["img1.png","img2.png","img3.jpg"]
    });

gsap.to(".fleftelem",{
    scrollTrigger: { 
        trigger:"#fimg",
        pin: true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y: "-300%",
    ease:Power1

});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 4,  
    slideStyle: (setScroll) => {
      sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress+index);
            },
        });
      });
    },
  });
