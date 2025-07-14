const containers = document.querySelectorAll(".image-container");
const templateVenus = document.querySelector("#creature-venus");
const templateTentacle = document.querySelector("#creature-tentacle");
const templateLarva = document.querySelector("#creature-larva");

containers.forEach((container) => {
  container.appendChild(templateVenus.cloneNode(true));
  container.appendChild(templateTentacle.cloneNode(true));
  container.appendChild(templateLarva.cloneNode(true));
});

const content = document.querySelector(".content");
const track = document.querySelector(".track");

function updateDuration() {
  const contentWidth = content.offsetWidth;
  // Reduced speed (was 100, now 80 pixels per second)
  const baseSpeed = 50;
  const duration = contentWidth / baseSpeed;

  const minDuration = 8; // Increased minimum duration (was 5)
  const maxDuration = 35; // Increased maximum duration (was 30)
  const finalDuration = Math.min(Math.max(duration, minDuration), maxDuration);

  // Increased the adjustment factor for wider screens
  const adjustmentFactor = window.innerWidth > 1400 ? 0.998 : 0.999;
  track.style.animationDuration = finalDuration * adjustmentFactor + "s";
}

// Update on load, resize, and orientation change
window.addEventListener("load", updateDuration);
window.addEventListener("resize", updateDuration);
window.addEventListener("orientationchange", updateDuration);

 let t5=gsap.timeline({
  scrollTrigger: {
    trigger: ".main #page5",
    start: "10% top",
    end: "bottom 30%",
    scrub: 1,
    pin: true,
     anticipatePin: 1,
    yoyo: true,
  

  },
});

t5.to("#page5 #anim-img6", {
  top: "30%",
  left: "10%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px",
  
});
t5.from("#page5 #anim-img6 #inner-con", {
 opacity:0
  
});

t5.to("#page5 #anim-img5", {
  top: "14%",
  right: "100%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px"
  
});
t5.from("#page5 #anim-img5 #inner-con", {
 opacity:0
  
});
t5.to("#page5 #anim-img4", {
  left: "90%",
  top: "30%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px",
  delay: 1.5,
  
});
t5.from("#page5 #anim-img4 #inner-con", {
 opacity:0
  
});
t5.to("#page5 #anim-img3", {
  left: "90%",
  top: "80%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px",
  delay: 2,
  
});
t5.from("#page5 #anim-img3 #inner-con", {
 opacity:0
  
});
t5.to("#page5 #anim-img2", {
  left: "10%",
  top: "80%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px",
  delay: 2.5,
  
});
t5.from("#page5 #anim-img2 #inner-con", {
 opacity:0
  
});
t5.to("#page5 #anim-img1", {
  top: "85%",
  ease: "none",
  duration: 1,
  height: "200px",
  width: "250px",
  delay: 1.5,
  
});
t5.from("#page5 #anim-img1 #inner-con", {
 opacity:0
  
});
t5.from("#page5 h1", {
  opacity: 0,
  duration: 3,
  delay: 2,
  ease: "none",

});
let t7=gsap.timeline({
  scrollTrigger: {
    trigger: ".main #page7",
    start: "30% top",
    end: "bottom 20%",
    scrub: 1,
    pin: true,
    yoyo: true,

  },
});

t7.from("#page7 #plc-stu2", {
y:450,
opacity:0,
});

t7.from("#page7 #plc-stu3", {
y:450,
opacity:0,
 
});

t7.from("#page7 #plc-stu4", {
y:450,
opacity:0,
});
