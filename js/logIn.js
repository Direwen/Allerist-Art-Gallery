var formInputs = document.querySelectorAll(".form_input input");

formInputs.forEach(input =>{
    input.addEventListener('focus', function(){
        input.parentNode.parentNode.classList.add("formFocus");
    })

    input.addEventListener('blur', function(){
        if(input.value == '')
            input.parentNode.parentNode.classList.remove("formFocus");
    })
})

var emailInput = document.querySelector('.form_input.one input');
var pswInput = document.querySelector('.form_input.two input');
var subInput = document.querySelector('.form_submit');

subInput.addEventListener('click', function(){

    if(emailInput.value == "user@gmail.com" && pswInput.value == "12345"){
        alert("This is Valid Login Alert box");
        window.location.replace("../index.html");
    }
    else if(emailInput.value == "" || pswInput.value == ""){
        alert("Fill the form first ...")
    }
    else{
        alert("This is Invalid Login Alert box");
    }
    
})

