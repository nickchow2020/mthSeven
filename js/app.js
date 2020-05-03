/* ***********
function to get all giving element siblings
**************/
let getSiblings = function (arr) {
    let siblings = []; 
    let sibling  = arr.parentNode.firstElementChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== arr) {
            siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling;
    }
    return siblings;
};




/* ***********
 Traffic Button Stlye With jQuery when click
**************/
$(".trafic-wrap").on("click","ul li",function(e){
    $(this).addClass("isActive").siblings().removeClass("isActive");
})


/* ***********
Createing Alert With JavaScript and class for alert 
also going to create the close click bottoms
**************/
const alertSec = document.getElementById("alert");
alertSec.classList.add("alert");
alertSec.innerHTML = 
`
<p>
<strong>Alert:</strong> You Have <strong>6</strong>overdue tasks to completes
</p>
<a href="#"><p class="alertClose">X</p></a>
`
alertSec.addEventListener("click",(e)=>{
    if(e.target.classList.contains("alertClose")){
        alertSec.style.display = "none";
    }
});

/* ***********
showing the line Chart separately when click it's buttons
**************/
const lineChart = document.querySelector('.trafic-chart');
const lineHour = document.querySelector('.chartHourly');
const lineDaily = document.querySelector('.chartDaily');
const lineWeekly = document.querySelector('.chartWeekly');
const lineMonthly = document.querySelector('.chartMonthly');

lineWeekly.classList.add("show");

lineChart.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        if(e.target.classList.contains("hourly")){
            lineHour.classList.add("show");
            let lineHourSiblings = getSiblings(lineHour);
            lineHourSiblings.forEach(e => e.classList.remove("show"))
        }else if(e.target.classList.contains("daily")){
            lineDaily.classList.add("show");
            let lineDailySiblings = getSiblings(lineDaily);
            lineDailySiblings.forEach(e => e.classList.remove("show")) 
        }else if(e.target.classList.contains("weekly")){
            lineWeekly.classList.add("show");
            let lineWeeklySiblings = getSiblings(lineWeekly);
            lineWeeklySiblings.forEach(e => e.classList.remove("show")) 
        }else if(e.target.classList.contains("monthly")){
            lineMonthly.classList.add("show");
            let lineMonthlySiblings = getSiblings(lineMonthly);
            lineMonthlySiblings.forEach(e => e.classList.remove("show")) 
        }
    }
});

/* ***********
Checking the Message Section Both Input filed and text file are emplty
and making the confirmation when it fill out.
**************/
const user = document.getElementById("userInput");
const message = document.getElementById("userMessage");
const send = document.getElementById("sendBtn");
send.addEventListener("click",(e)=>{
    if(user.value === "" && message.value === ""){
        alert("Hi,Please fill out both user field and message field");
    }else if(user.value === ""){
        alert("Hi,Please fill out the user field");
    }else if(message.value === ""){
        alert("Hi,Please fill out the message field");
    }else{
        alert("Both user and message field succesfully submited!!");
        user.value = "";
        message.value = "";
    }
    e.preventDefault();
})
/* ****************************
Adding iconClick class to the icon when click on it. 
******************************/
const sideBarArea = document.querySelector(".sidebar");

sideBarArea.addEventListener("click",(e)=>{
if(e.target.classList.contains("toggle")){
    let parent = e.target.parentNode;
    parent.classList.add("iconClick");
    let siblings = getSiblings(parent);
    for(let i = 0; i < siblings.length; i ++){
        siblings[i].classList.remove("iconClick");
    }
}
})