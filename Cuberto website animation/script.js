var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");

frames.forEach(frame =>{
frame.addEventListener("mousemove",(dets)=>{
    var dims = frame.getBoundingClientRect();

    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zeroone = gsap.utils.mapRange(xstart,xend,0,1,dets.clientX);

    gsap.to(circle,{
        scale:4
    })

    gsap.to(frame.children,{
        color:"white",
        duration: 0.4,
        y:"-5vw"
    })

    gsap.to(frame.children,{
        x: lerp (-50,50,zeroone),
        duration:0.3

    })
})

frame.addEventListener("mouseleave",(dets)=>{
    gsap.to(circle,{
        scale:1
    })
    
    gsap.to(frame.children,{
        color:"black",
        duration: 0.6,
        y:"0"
    })

    gsap.to(frame.children,{
        x: 0,
        duration:0.3

    })
    
})
})

const lerp = (x,y,a)=>x*(1-a) + y*a;    

window.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y: dets.clientY,
        duration: 0.3 ,
        ease:Expo
    })
})

