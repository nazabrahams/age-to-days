let age= document.querySelector("[name='age']")
let calculate= document.querySelector("[data-calculate]")
let calcbtn= document.querySelector("#calcbtn")


function results() {
   let idk= (age.value * 365) 
    calculate.value=idk

}

calcbtn.addEventListener("click", results)
