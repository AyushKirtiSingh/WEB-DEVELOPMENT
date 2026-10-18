let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button .addEventListener("dblclick",()=>{
        document.querySelector(".box").innerHTML = "<b>YAYY YOU WERE CLICKED</b> ENJOY YOUR CLICK!"
})

button .addEventListener("contextmenu",()=>{
        alert("Dont hack us by right click please")
})

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keycode)
})