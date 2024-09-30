var typed= new Typed(".motion1",
{
    strings:["I'm Aditya Saini","Welcome to my portfolio"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}
);
var typed= new Typed(".newmotion1",
    {
        strings:["Hi , I'm Aditya Saini"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    }
    );
    var typed =new Typed (".motion2",
        {
            strings:['Web Developer',' Java developer'],
            typeSpeed:100,
            backSpeed:90,
            backDelay:900,
            loop:true
        } 
        );

var typed =new Typed (".newmotion2",
{
    strings:['Web Developer',' Java developer'],
    typeSpeed:100,
    backSpeed:90,
    backDelay:900,
    loop:true
} 
);

var typed =new Typed ('.logo',
{
    strings:["Aditya's Portfolio",],
    typeSpeed:80,
    backSpeed:40,
    backDelay:1000,
    loop:false
}
); 
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

var daylight =document.getElementById("mode");
daylight.onclick=function( )
{
    // document.getElementById("menu").style.color = "red";
    document.body.classList.toggle('day-light');
}

let x= document.getElementById('menu');
let menubtn=document.querySelector('.menubtn')

function openit()
{
  x.style.display='block'
} 
const slides = document.querySelectorAll(".slide")


var counter=0;
slides .forEach((slide, index) => {
    slide.style.left ='${index * 100}100%'
})

// let a= document.getElementById("viewbtn").addEventListener("click",displayabout );
// let viewtext=document.addEventListener() ;
// function viewtext()
//  {
// document.getElementById("view").innertext=about(about);
//  }
