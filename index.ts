const imeges=document.querySelectorAll<HTMLImageElement>("img")
const wrapBox=document.querySelectorAll(".img-item")
const btn=document.querySelector("button")



for(let i=0;i<imeges.length;i++){
    const newURL=imeges[i].getAttribute("src")
    if(newURL) imeges[i].src=newURL
    
    imeges[i].addEventListener("load",()=>{
        wrapBox[i].classList.remove("laziy")
        console.log(wrapBox);
        
    })
    
}

btn?.addEventListener("click",()=>{
  window.location.reload()
  console.log("hello");
  
})