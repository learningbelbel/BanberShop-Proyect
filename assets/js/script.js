const email = document.getElementById("form-email")
const form = document.getElementById("form")
const mapbtn= document.getElementById("mapbtn")
const map = document.getElementById("locationContainer")

const btnUp = document.getElementById("btnUpTo")
const menubtn = document.getElementById("menubtn")
const ulmenu = document.getElementById("menuul")

menubtn.addEventListener("click", ()=>{
    ulmenu.classList.toggle("menuDisplay");
    console.log("menudisplayclass")
})

email.addEventListener("click",()=>{
    form.classList.toggle("displayClass")
    map.classList.remove("displayClassMap")
    
})

mapbtn.addEventListener("click",()=>{
    map.classList.toggle("displayClassMap")
    form.classList.remove("displayClass")

    
    
})



btnUp.addEventListener("click", scrollUp)

function scrollUp(){
   let currentScroll = document.documentElement.scrollTop;
   if(currentScroll > 0 ){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll/10))
   }
   console.log(currentScroll)
}



window.onscroll =  function(){
    var scroll =  document.documentElement.scrollTop;

    if(scroll >  400){
        btnUp.style.display = 'block'
    } else{
        btnUp.style.display = 'none'

    }
}


