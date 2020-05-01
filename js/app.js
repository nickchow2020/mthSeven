/* ***********
 Traffic Button Stlye With jQuery when click
**************/
$(".trafic-wrap").on("click","ul li",function(){
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
const buttonsUl = document.querySelector(".display-mode");
const lineChartArea = document.getElementById("traficChart");
const chartHourly = document.querySelector(".chartHourly");
const chartDaily = document.querySelector(".chartDaily");
const chartWeekly = document.querySelector(".chartWeekly");
const chartMonthly = document.querySelector(".chartMonthly");

buttonsUl.addEventListener("click",(e)=>{

})