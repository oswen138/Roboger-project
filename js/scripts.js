//Business Logic

function speakArray(input) {
  const inputNum = [];
  for (let i=0; i <= input; i++) {
  
    if (i.toString().includes("3")) {
      inputNum.push("Won't you be my neighbor?");
    }
    else if (i.toString().includes("2")) {
      inputNum.push("Boop!");
    }
    else if (i.toString().includes("1")) {
      inputNum.push("Beep!");
    } else {
      inputNum.push(i);
    }
  }
  return inputNum;
}


//Front end Logic

$(document).ready(function() {
  $("#formZing").submit(function(event) {
    event.preventDefault();
    const inputNum  = parseInt($("#input").val());
    let result = speakArray(inputNum).toString();
    $("#result").text(result);
    $("#result").show() 
  });
});
    


