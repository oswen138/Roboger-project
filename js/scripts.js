//Business Logic

function result(input){
  let speak = [];
   for (let i=0; i <= input; i++) {
       speak.push(i.toString());
       if (speak[i].includes("1")) {
            speak[i] = ("Beep!");
            } else if (i.toString().includes("2")) {
              speak.push("Boop!");
            } else if (i.toString().includes("3")) {
              speak.push("Won't you be my neighbor?");
            } else { 
              speak.push("Moo");
            }
          }l
          return speak;
        }


// UI Logic
 $(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    let input = parseInt($("#value").val());
    let speak = speak(input).toString();
    $("#result").text(roboArray);
    $("#result").show();
    $("#formOne").show();
  });
});
 





 //UI logic
 $(document).ready(function() {
   $("#formOne").submit(function(event) {
     event.preventDefault();
 
     let input = parseInt($("#number").val());
     let roboArray = talkRobo(input).toString();
     $("#result").text(roboArray);
     $("#result").show();
     $("#formOne").show();
   });
 });






 //Bussiness Logic
 function neighbor(hood) {
  const number = [];
  for (let i = 0; i <= hood; i++) {
    number.push(i.toString());
    if ((number[i]).match("3")) {
      number[i] = ("Won't you be my neigbor?.");
    } else if ((number[i]).match("2")) {
      number[i] = ("Boop");
    } else if (number[i].match("1")) {
      number[i] = ("Beep");
    } else {
      number[i];
  } 
}
return number;
};

  // Business logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedNumber = $("#number").val();
    let result = neighbor(inputtedNumber);
    $("#output").text(result);
    $("#output").show() 
  });
});




















//  // Business Logic
//  

//     // UI Logic
//  $(document).ready(function() {
//   $("form#formOne").submit(function(event) {
//     event.preventDefault();
//     const value = parseInt($("input#value").val());
//     $(".result").show();