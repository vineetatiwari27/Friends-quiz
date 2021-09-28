var readLineSync = require("readline-sync");
var name = readLineSync.question("What's your name??")
console.log("Hey! " + name + ", How you doin? So, you think you're a og friends fan eh? let's play then!")

const questions = [
    {
        question: "Which character has a twin? Joey or Phoebe?= ",
        answer: "phoebe"
    },
    {
        question: "Rachel's baby name was? Emma or Tia= ",

        answer: "emma"
    },
    {
        question: "What pet did Ross own? Parrot or Monkey= ",
        answer: "monkey"
    },
    {
  question: "Monica dated an ophthalmologist named= ",
  answer: "richard"
},
{
question: "Who was the maid of honor at Monica’s wedding? phoebe or rachel?= ",
answer:"rachel"
}
];
var score = 0;
function quiz(question, answer) {

    var uanswer = readLineSync.question(question)

    var newans = uanswer.toLowerCase();
    if (newans == answer) {
        score = score + 1;
        console.log("noice!!");

        newans = "";
    }
    else {

        console.log("Nope!");

        newans = "";
    }
}
for (var i = 0; i < questions.length; i++) {
    var curr = questions[i];
    quiz(curr.question, curr.answer)
}
if (score >= 2) {
    console.log("FINAL SCORE: ", score);
    console.log("Congrats!! you passed the test");
    console.log("Check out the high score");
    console.log("Name: Vineeta");
    console.log("Score:3");
    console.log("if you beat this score then send me a screenshot and i'll update it xx");
}
else {
    console.log("FINAL SCORE: ", score);
    console.log("you need to binge watch it again =p");
    console.log("ChecK out the high score");
    console.log("Name: Vineeta");
    console.log("Score:3");
    console.log("if you beat this score then send me a screenshot and i'll update it xx");
}
