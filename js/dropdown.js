// Making the ul dropDowm menu clickables.
const dropdownUl = document.querySelector(".dropDown");
dropdownUl.addEventListener("click",(e)=>{
        if(e.target.tagName === "SPAN"){
            let li = e.target.parentNode;
            dropdownUl.removeChild(li);
        }
});

dropdownUl.style.display = "none";

const bell= document.querySelector(".bell");
const greenDot = document.querySelector(".greenDot");

bell.addEventListener("click",(e)=>{
  if(dropdownUl.style.display === "none"){
    dropdownUl.style.display = "";
    greenDot.style.display = "none";
  }else{
    dropdownUl.style.display = "none";
    greenDot.style.display = "";
  }
})

