var answers = [
  '.img/magic8ball_1.png',
  '.img/magic8ball_2.png',
  '.img/magic8ball_3.png',
  '.img/magic8ball_4.png',
  '.img/magic8ball_5.png',
  '.img/magic8ball_6.png',
  '.img/magic8ball_7.png',
  '.img/magic8ball_8.png',
  '.img/magic8ball_9.png',
  '.img/magic8ball_10.png',
  '.img/magic8ball_11.png',
  '.img/magic8ball_12.png',
  '.img/magic8ball_13.png',
  '.img/magic8ball_14.png',
  '.img/magic8ball_15.png',
  '.img/magic8ball_16.png',
  '.img/magic8ball_17.png',
  '.img/magic8ball_18.png',
  '.img/magic8ball_19.png',
  '.img/magic8ball_20.png',

];
    
    window.onload = function() {
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       var question = document.getElementById("question");
       
       ask.addEventListener("click", function() {
         if (question.value.length < 1) {
           alert('Please enter a question');
         } else {
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerHTML = answers[num];
           
         }
       });
    };