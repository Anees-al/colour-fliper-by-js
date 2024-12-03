const colors=["red","green","rgba(133,122,200)","#15025"]
const btn=document.getElementById('btn-click')
const color=document.querySelector('.color')


btn.addEventListener("click" , function(){
    const randomNumber=randomNumbers()
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber]
})


function randomNumbers(){
    return Math.floor(Math.random()*colors.length)
}

