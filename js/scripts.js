
  
//business logic
function(speakRoboger) {
  alert('I speak' + word + '!');

}

const words = ['Boop!', 'Beep!', 'Won't you be my neighbor?'];
words.forEach(function(word) {
  alert('I speak' + word + '!');
});



let thingsILike = "I like...";
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
thingsILike;








  let wordArray = [""];
   for (let i=0; i <= input; i++) {
     if (i.toString().includes("3")) {
       roboArray.push("Won't you be my neighbor?");
     } else if (i.toString().includes("2")) {
       roboArray.push("Boop!");
     } else if (i.toString().includes("1")) {
       roboArray.push("Beep!");
     } else {
         roboArray.push(i);
     }
   }
   return roboArray;
 }
 
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

// //Business Logic

// function resultArray(input) {
//   let numbers = [];
//    for (let i=0; i <= input; i += 1) {
//      speak = index.toString();

//       if (speak.includes(1)) {
//         numbers.push(Beep!);
//       } else if (speak.includes(2)) {
//         numbers.push(Boop!);
//       } else if (speak.includes(3)) {
//         numbers.push(Won't you be my neighbor?);
//       } else { 
//         numbers.push(Moo);
//       }
//       return numbers;
//     }


// // UI Logic
//  $(document).ready(function() {
//    $("form#formZing").submit(function(event) {
//     event.preventDefault();
//     input =  ($("input#value").val()); 
//     result = resultArray(input);
//     $("#outputOne").text(result);
   
//   });
  
// })




const words = beep boop meow

words.join();

const languages = ['HTML', 'CSS', 'JavaScript'];
languages.forEach(function(language) {
  alert('I love ' + language + '!');
});