var panel = $('#quiz-area');
var countStartNumber = 30;

// the click events in use

$(document).on('click', '#start-over', function(e) {
    game.reset(e);
});

$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
});

$(document).on('click', '#start', function(e) {
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    game.loadQuestion();
});



//Questions

    var questions = [{
    question: "Which NBA Team has won the most NBA championships?",
    answers: ["Bulls", "Lakers", "Celtics", "Spurs"],
    correctAnswer: "Celtics",
    image:"assets/images/celtics.gif"
    }, {
    question: "Kobe Bryant scored his career high 81 points in a game against which NBA Team?",
    answers: ["Suns", "Heat", "Wizards", "Raptors"],
    correctAnswer: "Raptors",
    image:"assets/images/kobe.gif"
    }, {
    question: "Which team swept Lebron James in his first NBA finals appearance?",
    answers: ["Clippers", "Spurs", "Lakers", "Mavs"],
    correctAnswer: "Spurs"
    image:"assets/images/lebron.gif"
    }, {
    question: "In the U.S. Olympic men's career record book, who holds the record for the most points?",
    answers: ["Carmelo Anthony", "Michael Jordan", "Kobe Bryant", "Kevin Durant"],
    correctAnswer: "Carmelo Anthony",
    image:"assets/images/melo.gif"
    }, {
    question: "Who holds the record for scoring the most points in an NBA game?",
    answers: ["Michael Jordan", "Wilt Chamberlain", "Karl Malone", "Kobe Bryant"],
    correctAnswer: "Wilt Chamberlain",
    image:"assets/images/wilt.jpg"
    }, {
    question: "Which team won the 2015 NBA Championships?",
    answers: ["Cavs", "Warriors"],
    correctAnswer: "Warriors",
    image:"assets/images/warriors.gif"
    }, {
    question: "Which player was the only one in NBA history to win MVP by a unanimous decision?",
    answers: ["Kobe Bryant", "Steph Curry", "Michael Jordan", "Lebron James"],
    correctAnswer: "Steph Curry",
    image:"assets/images/steph.gif"
    }, {
    question: "Which boxer was the only one to have a 50-0 record?",
    answers: ["Floyd Mayweather", "Ali", "George Foreman", "Mike Tyson"],
    correctAnswer: "Floyd Mayweather",
    image:"assets/images/floyd.jpg"
    }];

    var game = {
        questions:questions,
        currentQuestion:0,
        counter:countStartNumber,
        correct:0,
        incorrect:0,
        countdown: function(){
            game.counter--;
            $('#counter-number').html(game.counter);

            if(game.counter === 0) {
                console.log('TIME UP!');
                game.timeUp();
            }
        },
        loadQuestion: function() {
            timer = setInterval(game.countdown, 1000);
            panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
            for (var i = 0; i<questions[this.currentQuestion].answers.length; i++) {
                panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
            }
        },
    
        nextQuestion: function(){
    game.counter = countStartNumber;
    $('#counter-number').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html('<h2>All done, heres how you did!</h2>');
    $('#counter-number').html(game.counter);
    panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    panel.append('<br><button id="start-over">Start Over?</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    panel.html('<h2>Nope!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    panel.html('<h2>Correct!</h2>');
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};
