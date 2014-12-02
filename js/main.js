var quiz = {
	currentIndex : 0,
	score : [],
	done : function() {
		return this.currentIndex >= this.questions.length  ;
	},
	numCorrect : function() {
		var correct = 0;
		for (s = 0; s < this.score.length; s++) {
			if (this.score[s]) {
				correct+=1;
			}
		}
		return correct;
	},
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
			img : "img/fermata-scaled.jpeg",
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
			img : "img/coda-scaled.png",
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
			question : "These are time signatures.  What does the bottom number mean in a time signature?",
			img : "img/time-signatures.png",
			options : {
				a: "How many beats should be in a measure",
				b: "It represents how fast the music should be played",
				c: "It's the ration of quarter notes to whole notes the music should have",
				d: "Which note should get a single beat"
			},
			answer : "d",
			explanation: "It tells which note should get a single beat.  The top number is how many beats will be in a measure."
		},
		{
			question : "This symbol is a rest.  This rest will have the same duration as which note?",
			img : "img/quarter-rest.jpeg",
			options : {
				a: "A whole note",
				b: "A half note",
				c: "A quarter note",
				d: "An eighth note"
			},
			answer : "c",
			explanation: "It's a quarter rest and has the same duration as a quarter note."
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
	hideAgainButton();
	clearOptions();
	updateNumCorrect();

	$("#check").on('click', function() {
		showAnswer(currentQuestion().explanation);
		showNextButton();
		hideCheckButton();
		quiz.score.push(checkAnswer());
		updateNumCorrect();
	});

	$("#next").on('click', function() {
		hideAnswer();
		quiz.currentIndex = quiz.currentIndex+1;
		if (quiz.done() === false) {
		displayQuestion(quiz.currentIndex);
		clearOptions();
		hideNextButton();
		showCheckButton();
		} else {
			hideCheckButton();
			showAgainButton();
		}
	});

	$("#again").on('click', function() {
		location.reload();
	});
});

var updateNumCorrect = function() {
	$("#correct").html(quiz.numCorrect());
}

var checkAnswer = function() {
	var answer  = $('input[name=answer]:checked').val();
	return answer == currentQuestion().answer;
}

var hideNextButton = function() {
	$("#next").hide();
}

var showNextButton = function() {
	$("#next").show();
}

var hideCheckButton = function() {
	$("#check").hide();
}

var showCheckButton = function() {
	$("#check").show();
}

var hideAgainButton = function() {
	$("#again").hide();
}

var showAgainButton = function() {
	$("#again").show();
}

var hideAnswer = function() {
	$(".answer p").text("");
}

var showAnswer = function(explanation) {
	$(".answer p").text(explanation);
}

var displayQuestion = function(n) {	
	var question = quiz.questions[n];
	$("#question-number").html(n + 1);
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


