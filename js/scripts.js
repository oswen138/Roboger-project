//Business Logic

function speakArray(input) {
  let words = [];
  for (let i=0; i <= input; i++) {
    if (i.toString().match("1")) {
      words.push("Beep!");
    }
    else if (i.toString().match("2")) {
      words.push("Boop!");
    }
    else if (i.toString().match("3")) {
      words.push("Won't you be my neighbor?");
    } else {
      words.push(i);
    }
  }
  return words;
}

//Front end Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedNumber = $("#number").val();
    let result = neighbor(inputtedNumber);
    $("#output").text(result);
    $("#output").show() 
  });
});
    