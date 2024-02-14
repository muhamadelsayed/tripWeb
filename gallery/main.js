let openUl = document.getElementById("open");
let ul = document.querySelector("#ul-container");
window.addEventListener("resize",()=>{
    let width = window.innerWidth;
    if(width >= 768){
        ul.style.display = "flex";
        ul.classList.add("ul");
        ul.classList.remove("ul-column")
        document.querySelectorAll("#open div").forEach(e => e.style.background = "#faf2f0")
    }
    else{
        ul.classList.remove('ul')
        document.querySelectorAll("#open div").forEach(e => e.style.background = "#312d2c");
        if(openUl.classList.contains("active")){
            console.log("ok")
            ul.style.display = "flex";
            ul.classList.add("ul-column");
            document.querySelectorAll("#open div").forEach(e => e.style.background = "#faf2f0")
        }else{
            ul.style.display = "none";
        }
    }
})
openUl.addEventListener("click",()=>{
    if(!openUl.classList.contains("active")){
        openUl.classList.add("active");
        ul.classList.add("ul-column");
        ul.classList.remove("ul");
        ul.style.display = "flex";
        document.querySelectorAll("#open div").forEach(e => e.style.background = "#faf2f0")
    }
    else{
        openUl.classList.remove("active");
        ul.classList.remove("ul-column");
        ul.classList.add("ul")
        ul.style.display = "none"
        document.querySelectorAll("#open div").forEach(e => e.style.background = "#312d2c")
    }
})
document.addEventListener("click",(e)=>{
    if (e.target != ul && e.target != openUl && e.target != openUl.children[0] && e.target != openUl.children[1] && openUl.classList.contains("active")){
        ul.style.display = "none";
        document.querySelectorAll("#open div").forEach(e => e.style.background = "#312d2c")
        openUl.classList.remove("active")
    }
})
// image slider https://colorlib.com/wp/templates/ some changes for prevent bootsrab
document.getElementsByTagName("header")[0].style.display = "flex";
[...document.getElementsByTagName("a")].forEach((e)=>{e.style.color = "inherit"})
