
// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();
  const valueInput = $("input#value").val();
  const output = formOne(valueInput);
    $(#output").show();
    $(#img1).show();
    
  });
});




/Business Logic

function words(value) {
  let output = [];
  for (let i = 0; i <= number; i++ ) {
    valueInput.push(i.toString());

  if (valueInput.includes("1")) {
    value.push("Beep!");
    $("#img1").show();
  } else if (valueInput.includes("2")) {
    value.push("Boop!");
  } else if (valueInput.includes("3")) {
    value.push("Won't you be my neighbor?");
    $("#img1").show();
  } else { 
    value.push("Moo");
  }
}
return value;





// <! -- This is pseudo-code testing -->

// Describe: number()
// Test: start at 0, numbers run upwards in increments of 1
// Code: i=0; i < number; i++
// Expect(num(4)).toEqual(0,1,2,3,4);

// function number(4) {
//   return 0,1,2,3,4
// }

// Test #2

// Test: "numbers that contain 1"
// Expect(number(31)).toEqual("Beep!");

// function number(21) {
//   if (number.includes('1') {
//     return beep!;
//   } else {
//     return Moo; 
//   }
//   }
// }

// Test #3

// Test: "numbers that contain 2"
// Expect(number(32)).toEqual("Boop!");

// function number(32) {
//   if (number.includes('2') {
//     return "Boop";
//   } else if (number.includes('1') {
//     return "Beep";
//   }
// }

// Test#4

// Test: "numbers that contain 3"
// Expect(number(13)).toEqual("Won't you be my neighbor?");

// function number(13) {
//   if (number.includes('3') {
//     return "Won't you be my neighbor?";
//   } else if (number.includes('1') {
//     return "Beep";
//   } else if (number.includes('2') {
//     return "Boop";
//   } else {
//     return "Moo!"
//   }
// }
}
