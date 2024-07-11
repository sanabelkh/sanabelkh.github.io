//header toggle
let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})


let typed=new Typed('.auto-input',{
    strings:['Software Engineer !','Full-Stack Developer !','Front-End Developer !','ICT Lecturer!']
    ,typedSpeed: 100,
    backSpeed:100,
    backDelay:2000,
    loop:true
})



// Get All Sections
let navlinks=document.querySelectorAll('nav ul li a');
let section=document.querySelectorAll('section')

window.addEventListener('scroll', function (){

const scrollPosthits= window.scrolly.sections.forEach(section => {

if(scrollPos > section.offsetTop && scrollPos (section.offsetTop+ section.offsetHeight)){

navlinks.forEach(Link => {
Link.classList.remove("active");

if(section.getAttribute("id") === link.getAttribute('href').substring(1)){


}

})
}
})
})
    


    








