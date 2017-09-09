//variable defining an array with the question and answer pairings as object elements
var questionAnswerList = [
{question:"Which NBA Team has won the most NBA championships??", answerOne:"Bulls", answerTwo:"Celtics", answerThree:"Spurs", correctAnswer:"Celtics"},
{question:"Kobe Bryant scored his career high 81 points in a game against which NBA Team?", answerOne:"Raptors", answerTwo:"Clippers", answerThree:"Jazz", correctAnswer:"Raptors"},
{question:"Which team swept Lebron James in his first NBA finals appearance?", answerOne:"Mavs", answerTwo:"Spurs", answerThree:"Lakers", correctAnswer:"Spurs"},
{question:"In the U.S. Olympic men's career record book, who holds the record for the most points?", answerOne:"Kobe Bryant", answerTwo:"Michael Jordan", answerThree:"Carmelo Anthony", correctAnswer:"Carmelo Anthony"},
{question:"Who holds the record for scoring the most points in an NBA game?", answerOne:"Wilt Chamberlain", answerTwo:"Michael Jordan", answerThree:"Kobe Bryant", correctAnswer:"Wilt Chamberlain"}

];

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var timeLeft = 30;

//changes display counter
function increment() {
	timeLeft--;
	$('#timeLeftStatement').html('<p>Time Remaining: ' + timeLeft + '</p>');
	if (timeLeft==0) {
            $('#submitButton').click();
        };
};

//waits for page to load, then loads start button
$(document).ready(function() {
	$("#startButton").click(function(){
    	$("#startButton").fadeOut(1000);
    	$("#main").append('<p id=timeLeftStatement>Time Remaining:' + timeLeft + '</p>');
    	for (var i = 0; i < questionAnswerList.length; i++) {
    		$('#main').append('<p class=questionClass>' + questionAnswerList[i].question +'</p>');
    		$('#main').append('<form action="assets/javascript/javascript.js" id="form' +i+ '"</form>');
    		$('#form'+i+'').append('<input type="radio" name="answer">' + questionAnswerList[i].answerOne + '</input><br><input type="radio" name="answer" value='+i+'>' +questionAnswerList[i].answerTwo + '</input><br><input type="radio" name="answer">' +questionAnswerList[i].answerThree+ '</input><br><input type="radio" name="answer">' +questionAnswerList[i].correctAnswer+ '</input>');
    	};
    	$("#main").append('<input id="submitButton" type="submit" value="Submit">');
    	$('#submitButton').click(function() {
    		$('#submitButton').fadeOut(1000);
    		$("#timeLeftStatement").fadeOut(1000);
    		$(".questionClass").fadeOut(1000);
            console.log($("input:radio:checked")[0]);
    		for (var i = 0; i < questionAnswerList.length; i++) {
    			$('#form' +i).fadeOut(1000);

                console.log($('#form' +i).checked);
                
    		};

    		$("#main").append('<h1>Done!</h1><br>');
    		$("#main").append('<p>Correct Answers: ' +correctAnswers+ '</p>');
    		$("#main").append('<p>Incorrect Answers: ' +incorrectAnswers+ '</p>');
    		$('#main').append('<p>Unanswered: ' +unAnswered+ '</p>');

    	});

    	counter = setInterval(increment, 1000);
    	
	});
});





















