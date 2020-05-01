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
const alert = document.getElementById("alert");
alert.classList.add("alert");
alert.innerHTML = 
`
<p>
<strong>Alert:</strong> You Have <strong>6</strong>overdue tasks to completes
</p>
<a href="#"><p class="alertClose">X</p></a>
`
alert.addEventListener("click",(e)=>{
    if(e.target.classList.contains("alertClose")){
        alert.style.display = "none";
    }
})

/* ***********
showing the line Chart separately when click it's buttons
**************/
const lineChart = document.querySelector('.trafic-chart');
const lineHour = document.querySelector('.chartHourly');
const lineDaily = document.querySelector('.chartDaily');
const lineWeekly = document.querySelector('.chartWeekly');
const lineMonthly = document.querySelector('.chartMonthly')

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
})
