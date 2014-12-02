var quiz = {
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
			answer: "b"

		},
		{
			question : "This symbol is a fermata.  What does it mean?",
			img : "img/fermata.jpeg",
			options : {
				a: "It looks like an eye, so the conductor will be watching you",
				b: "Watch the conductor, the note below the fermata should be held as long as he or she wants",
				c: "increase the volume",
				d: "decrease the volume"
			},
			answer : "b"

		}
	]
}

$(document).ready(function() {
	$("#check").on('click', function() {
		alert("button handler is working");
	});

	
});

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