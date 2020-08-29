//Business Logic

function speakArray(input) {
  const inputNum = [];
  for (let i=0; i <= input; i++) {
    inputNum.push(i.toString());
    if (i.toString().match("1")) {
     alert("Beep!");
    }
    else if (i.toString().match("2")) {
      inputNum.push("Boop!");
    }
    else if (i.toString().match("3")) {
      inputNum.push("Won't you be my neighbor?");
    } else {
      inputNum.push(i);
    }
  }
  return inputNum;
};

//Front end Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputNum  = parseInt($("#input").val());
    let result = speakArray(inputNum).toString;
    $("#output").text(result);
    $("#output").show() 

  });
});
    


