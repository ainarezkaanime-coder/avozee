/* =================================
   MAMONT
   MODERN EFFECTS SCRIPT
================================= */


/* ===============================
   CUSTOM CURSOR
================================ */

const cursor = document.getElementById("cursor");

if(cursor){

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


document.querySelectorAll("a").forEach((link)=>{

    link.addEventListener("mouseenter",()=>{

        cursor.style.width="55px";
        cursor.style.height="55px";
        cursor.style.background="rgba(255,0,136,.35)";

    });


    link.addEventListener("mouseleave",()=>{

        cursor.style.width="26px";
        cursor.style.height="26px";
        cursor.style.background="rgba(255,0,136,.18)";

    });

});

}


/* ===============================
   PARTICLES
================================ */

const particleBox = document.getElementById("particles");


function createParticle(){

if(!particleBox) return;


const particle=document.createElement("span");

particle.className="particle";


let size=Math.random()*4+2;


particle.style.width=size+"px";
particle.style.height=size+"px";


particle.style.left=
Math.random()*100+"%";


particle.style.animationDuration=
(7+Math.random()*10)+"s";


particle.style.animationDelay=
Math.random()*4+"s";


particleBox.appendChild(particle);



setTimeout(()=>{

particle.remove();

},17000);


}



setInterval(createParticle,300);



/* ===============================
   PARALLAX EFFECT
================================ */


const wrapper=document.querySelector(".wrapper");


if(wrapper && window.innerWidth>700){


document.addEventListener("mousemove",(e)=>{


let x=
(window.innerWidth/2-e.clientX)/80;


let y=
(window.innerHeight/2-e.clientY)/80;



wrapper.style.transform=
`translate(${x}px,${y}px)`;


});


}



/* ===============================
   BUTTON RIPPLE
================================ */


document.querySelectorAll(".buy,.free")
.forEach(button=>{


button.addEventListener("click",(e)=>{


const ripple=document.createElement("span");


ripple.className="ripple";


const rect=
button.getBoundingClientRect();



ripple.style.left=
(e.clientX-rect.left)+"px";


ripple.style.top=
(e.clientY-rect.top)+"px";



button.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);


});


});




/* ===============================
   PRICE HOVER LIGHT
================================ */


document.querySelectorAll(".price-item")
.forEach(item=>{


item.addEventListener("mousemove",(e)=>{


let x=e.offsetX;
let y=e.offsetY;



item.style.background=
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(255,0,136,.18),
rgba(255,255,255,.03)
)
`;



});



item.addEventListener("mouseleave",()=>{


item.style.background=
"rgba(255,255,255,.03)";


});


});




/* ===============================
   LOGO 3D ROTATION
================================ */


const logo=document.querySelector(".logo");


if(logo && window.innerWidth>700){


document.addEventListener("mousemove",(e)=>{


let rotateX=
(window.innerHeight/2-e.clientY)/35;


let rotateY=
(e.clientX-window.innerWidth/2)/35;



logo.style.transform=
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;



});


}



/* ===============================
   RESET LOGO
================================ */


if(logo){

logo.addEventListener("mouseleave",()=>{


logo.style.transform=
"translateY(0)";


});


}



/* ===============================
   SMOOTH LOAD
================================ */


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});



/* ===============================
   MOBILE OPTIMIZATION
================================ */


if(window.innerWidth<=700){


const effects=[

document.querySelector(".wrapper"),
document.querySelector(".logo")

];


effects.forEach(el=>{

if(el){

el.style.transform="none";

}

});


}