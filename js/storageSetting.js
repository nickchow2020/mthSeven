// adding all require variables
const settingArea = document.querySelector(".setting");
const allInputs = document.querySelectorAll('input[type="checkbox"]');
const selectInput = document.querySelector(".timezone");

// Storing All the Value into LocalStorage
settingArea.addEventListener("click",(e)=>{
    if(e.target.classList.contains("save")){
        for(let i = 0; i < allInputs.length; i ++){
            localStorage.setItem(allInputs[i].value,allInputs[i].checked);
        }
        localStorage.setItem("selectValue",selectInput.value);
    }
    // Clearn All the localStorage
    if(e.target.classList.contains("cancal")){
        localStorage.clear();
        selectInput.value = "Select a Timezone";
        for(let i = 0; i < allInputs.length; i ++){
            allInputs[i].checked = false;
        }
    }
})

// Retrieve all the infor from the local Storages
for(let i = 0; i < allInputs.length; i ++){
    allInputs[i].checked = localStorage.getItem(allInputs[i].value) === "true" ? true:false;
}
selectInput.value = localStorage.getItem("selectValue");






