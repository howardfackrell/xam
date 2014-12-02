var quiz = {
	currentIndex : 0,
	score : [],
	questions : [
		{
			question : "Wich one of these is the Bass Clef?",
			img : "img/ClefSymbols4.png",
			options : {
				a: "The first one",
				b: "the second",
				c: "the third",
				d: "must be the last one"
			},
			answer: "b",
			explanation: "That's right, the one you've probably never seen is the tennor clef."

		},
		{
			question : "This symbol is a fermata.  What does it mean?",
			img : "img/fermata.jpeg",
			options : {
				a: "It looks like an eye, so the conductor will be watching you",
				b: "Watch the conductor, she'll hold it as long as she wants",
				c: "increase the volume",
				d: "decrease the volume"
			},
			answer : "b",
			explanation: "You should watch the conductor, he or she can choose how long this note should be held."
		},
		{
			question : "What is this symbol?",
			img : "img/coda.png",
			options : {
				a: "a Target",
				b: "a whole note",
				c: "a Coda",
				d: "a "
			},
			answer : "c",
			explanation: "It's a Coda."
		},
		{
			question : "This symbol is a fermata.  What does it mean?",
			img : "img/fermata.jpeg",
			options : {
				a: "It looks like an eye, so the conductor will be watching you",
				b: "Watch the conductor, she'll hold it as long as she wants",
				c: "increase the volume",
				d: "decrease the volume"
			},
			answer : "b",
			explanation: "You should watch the conductor, he or she can choose how long this note should be held."
		},
		{
			question : "This symbol is a fermata.  What does it mean?",
			img : "img/fermata.jpeg",
			options : {
				a: "It looks like an eye, so the conductor will be watching you",
				b: "Watch the conductor, she'll hold it as long as she wants",
				c: "increase the volume",
				d: "decrease the volume"
			},
			answer : "b",
			explanation: "You should watch the conductor, he or she can choose how long this note should be held."
		}
	]
}

var currentQuestion = function() {
	return quiz.questions[quiz.currentIndex];
}

$(document).ready(function() {
	hideAnswer();
	displayQuestion(quiz.currentIndex);
	hideNextButton();
	clearOptions();

	$("#check").on('click', function() {
		showAnswer(currentQuestion().explanation);
		showNextButton();
		quiz.score.push(checkAnswer());
	});

	$("#next").on('click', function() {
		hideAnswer();
		quiz.currentIndex = quiz.currentIndex+1;
		displayQuestion(quiz.currentIndex);
		clearOptions();
	});
});

var checkAnswer = function() {
	var answer  = $('input[name=answer]:checked').val();
	console.log(answer + "-----" + currentQuestion().answer);
	return answer == currentQuestion().answer;
}

var hideNextButton = function() {
	$("#next").hide();
}

var showNextButton = function() {
	$("#next").show();
}

var hideAnswer = function() {
	$(".answer p").text("");
}

var showAnswer = function(explanation) {
	$(".answer p").text(explanation);
}

var displayQuestion = function(n) {	
	var question = quiz.questions[n];
	$("#question-number").html(n);
	$("#context-image").attr("src", question.img);
	$("#the-question").text(question.question);
	$("label[for=a]").html(question.options.a);
	$("label[for=b]").html(question.options.b);
	$("label[for=c]").html(question.options.c);
	$("label[for=d]").html(question.options.d);
}

var clearOptions = function() {
	$("input").prop('checked', false);
}


