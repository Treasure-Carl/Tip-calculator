function calculateTip(){
   const billAmt = document.querySelector(".billAmt").value
   const service = document.querySelector("#serviceSelector").value
   const numOfPeople = document.querySelector(".peopleAmt").value

   if(billAmt === "" || service == 0){
       alert("Please enter a value the Bill amount and Service")
   }

   if(numOfPeople === "" || numOfPeople < 1){
        numOfPeople = 1;

        document.getElementById("each").style.display = "none"
   } else{
        document.getElementById("each").style.display = "block"
   }

   let total = (billAmt * service) / numOfPeople;
   total = Math.round(total*100)/100;
   total = total.toFixed(2);

   document.getElementById("tip").innerHTML = total;
   document.getElementById("totalTip").style.display = "block"

   document.querySelector(".billAmt").value = ".";
   document.querySelector("#serviceSelector").value = "0";
   document.querySelector(".peopleAmt").value = ".";




}



document.getElementById("each").style.display = "none"
document.getElementById("totalTip").style.display = "none"





document.getElementById("calculate").addEventListener("click", function(){
    calculateTip();
})