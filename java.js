

 const messageToPrint = document.querySelector("#message");
messageToPrint.addEventListener("keyup", ()=>{
    document.querySelectorAll("article").forEach(sectionElement => {
        sectionElement.innerText = messageToPrint.value;
    })

})
// document.querySelector("article").classList.add("blue-box");
// document.querySelector("article").classList.add("orange-box");