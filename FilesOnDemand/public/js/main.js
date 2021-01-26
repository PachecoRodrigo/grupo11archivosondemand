const form = document.getElementById("search");
const select = document.getElementById("categories")

let errores = {}

form.addEventListener("submit", function(event){
    
    checkSelect()
    if(Object.keys(errores).length > 0){
        event.preventDefault()
    }

})

function checkSelect(){
    if(select.value === "title" ){
        setError(select, 'Seleccione tipo de archivo')
    }else{
        setSucces(select)
    }

}

function setError(input, message){
    let small = document.getElementById("user-mesage")
    small.innerText = message
    select.className = "error"
    errores[input.name] =  message
    
}

function setSucces(input){
    let small = document.getElementById("user-mesage")
    small.innerText = ""
    select.className = ""
    delete errores[input.name] 
}
