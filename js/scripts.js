//Business Logic

function speakArray(input) {
  const num = [];
  for (let i=0; i <= input; i++) {
    num.push(i.toString());
    if (i.toString().match("1")) {
      num.push("Beep!");
    }
    else if (i.toString().match("2")) {
      num.push("Boop!");
    }
    else if (i.toString().match("3")) {
      num.push("Won't you be my neighbor?");
    } else {
      num.push(i);
    }
  }
  return words;
};

//Front end Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input = $("#number").val();
    let result = speakArray(input).toString;
    $("#output").text(result);
    $("#output").show() 
  });
});
    