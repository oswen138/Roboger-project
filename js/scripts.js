  
  $(document).ready(function() {
      $("#formOne").submit(function(event) {
        event.preventDefault();
        const inputOne = parseInt($("#value").val());
        let value = [];
        for (let i=0; i <=inputOne; i++) {
          value.push(i.toString());
        };

        console.log("moo!");
      }
      return value;

  }



// // back-end logic
// const beep = "beep!"
// const boop = "boop!"
// const neighbor = "Won't you be my neighbor?"


// var roboger = function(input) {
//   let numbers = [];
//   for (let i = 0; i <= input; i++) {
//     numbers.push(i.toString());
//   };
  
//   var robogers = numbers.map(function(number) {
//     if (number.includes("3")) {
//       return number = neighbor;
//     } else if (number.includes("2")) {
//       return number = boop;
//     } else if (number.includes("1")) {
//       return number = beep;
//     } else {
//       return number;
//     };
//   });
//   return robogers;
// };
// 2

// // front-end logic

// $(document).ready(function() {
//   $("form#formOne").submit(function(event) {
//     event.preventDefault();
//     var input = parseInt($("input#input").val());
//     var result = roboger(input);
//     $("#results").text(result);
//     $(".output").show();
//     $("img").click(function() {
//       $("#results").text(result.reverse());
//     });
//   });
  
// });




// //Business Logic

// function words(value) {
//   let value = [];
//   for (let i = 0; i <= number; i++ ) {
//     valueInput.push(i.toString());

//   if (valueInput.includes("1")) {
//     value.push("Beep!");
//     $("#img1").show();
//   } else if (valueInput.includes("2")) {
//     value.push("Boop!");
//   } else if (valueInput.includes("3")) {
//     value.push("Won't you be my neighbor?");
//     $("#img1").show();
//   } else { 
//     value.push("Moo");
//   }
// }
// return value;


// // User Interface Logic
// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//   event.preventDefault();
//   const valueInput = $("input#value").val();
//   const output = formOne(valueInput);
    
//   });
// });
















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

      )
