// Business Logic
function userArray (numberStop) { 
  var numbers = [];
  for (let index = 0; index <= numberStop; index += 1) {
    var words = index.toString();

    if (words.includes(3)) {
      numbers.push("Won't you be my neighbor?");
    } else if (words.includes(2)) {
      numbers.push("Boop");
    } else if (words.includes(1)) {
      numbers.push("Beep");
    } else {
      numbers.push(words);
    }
    console.log("This is the index for every loop: " +index);
  }
  return numbers;
}


// User Interface Logic
$(document).ready(function() {
    $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberStop = ($("input#number").val()); 
    var result = userArray(numberStop);
      $("#outputPhrase").show();
      $("#outputNumbers").text(result);
     
    });
    
});

<! -- This is pseudo-code testing -->

Describe: number()
Test: start at 0, numbers run upwards in increments of 1
Code: i=0; i < number; i++
Expect(num(4)).toEqual(0,1,2,3,4);

function number(4) {
  return 0,1,2,3,4
}

Test #2

Test: "numbers that contain 1"
Expect(number(31)).toEqual("Beep!");

function number(21) {
  if (number.includes('1') {
    return beep!;
  } else {
    return Moo; 
  }
  }
}

Test #3

Test: "numbers that contain 2"
Expect(number(32)).toEqual("Boop!");

function number(32) {
  if (number.includes('2') {
    return "Boop";
  } else if (number.includes('1') {
    return "Beep";
  }
}

Test#4

Test: "numbers that contain 3"
Expect(number(13)).toEqual("Won't you be my neighbor?");

function number(13) {
  if (number.includes('3') {
    return "Won't you be my neighbor?";
  } else if (number.includes('1') {
    return "Beep";
  } else if (number.includes('2') {
    return "Boop";
  } else {
    return "Moo!"
  }
}

