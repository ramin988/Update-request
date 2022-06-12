function result() {
  var numberValue = document.getElementById("locat").value;
  var numberValue1 = document.getElementById("battery").value;
  var numberValue2 = document.getElementById("strage").value;
  if (numberValue == "india" && numberValue1 >= 50 && numberValue2 >= 10) {
    console.log("update your Phone");
  } else {
   // console.log("Update Not Avaliable On Your country");
   if(numberValue1<50){
       console.log("Chargeyour Phione")
   }else{
       console.log("Free Up Strage")
   }
  }
}
