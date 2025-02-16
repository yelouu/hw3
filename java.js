document.addEventListener("DOMContentLoaded", function(){
 

    let button2 = document.querySelectorAll(".flipbutton"); 
    button2.forEach(function(button2){

    button2.addEventListener("click", function(){
        if (button2.style.boxShadow.includes("inset")){
            button2.style.boxShadow = "14px 15px 11px 3px rgba(65, 33, 22, 0.18)";
        } else{
            button2.style.boxShadow = "inset 6px 6px 20px rgba(65, 33, 22, 0.18)"; 
        }

        let textElement = button2.querySelector("!");
                if (textElement.textContent === "lmao"){
                    textElement.textContent = "я";
                } else {
                    textElement.textContent = "тут"; 
                }
    });
    });
    });

