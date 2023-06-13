const mycompose=()=>{
window.location.href="/index.html"
setTimeout(starred,5000)


}

const starred=()=>{
    document.getElementById(`myspan2`).style.display===`none`
    

    document.getElementById(`myspan2`).style.display=`flex`
}
const over=()=>{
    setTimeout(starred,3000)
    
}
over()
