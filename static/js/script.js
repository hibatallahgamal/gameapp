var random = Math.floor(Math.random() * 100)

console.log(random)

const enterNumber = document.getElementById("enterNumber")
const show = document.getElementById("show")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    if(random == enterNumber.value){
        show.innerHTML = "Bravooooooo!!!"
    }
    if(random > enterNumber.value){
        show.innerHTML = "Less!!!"
    }
    else{
        show.innerHTML = "More!!!"
    }
})

