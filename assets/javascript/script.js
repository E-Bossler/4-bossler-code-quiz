var questions = [
    {
        title: "What was the name of Anakin Skywalker's father?",
        choices: [
            "Luke Skywalker", "Darth Vader", "Obi Wan Kenobi", "he had no father"
        ],
        answer: "he had no father"
    },
    {
        title: "What color was Darth Maul's lightsaber?",
        choices: [
            "blue", "red", "green", "purple"
        ],
        answer: "red"
    },
    {
        title: "Queen Amidala was from what planet?",
        choices: [
            "Tattoine", "Naboo", "Jakku", "Ilum"
        ],
        answer: "Naboo"
    },
    {
        title: "The clone army was made from what character originally?",
        choices: [
            "Jango Fett", "Boba Fett", "Anakin Skywalker", "Yoda"
        ],
        answer: "Jango Fett"
    },
    {
        title: "Who is the Master of Darth Vader?",
        choices: [
            "Darth Sideous", "Darth Maul", "Darth Plaqueis", "Darth Bane"
        ],
        answer: "Darth Sideous"
    },
    {
        title: "The Millenium Falcon made the Kessel Run in how many parsecs?",
        choices: [
            "10", "12", "14", "16"
        ],
        answer: "12"
    },
    {
        title: "What imperial officer presided over the Death Star?",
        choices: [
            "Darth Vader", "General Hux", "Grand Moff Tarkin", "General Grievous"
        ],
        answer: "Grand Moff Tarkin"
    },
    {
        title: "What name did Luke Skywalker originally know Obi Wan Kenobi by?",
        choices: [
            "Old Ben", "Obi Wan Jinn", "Han Solo", "Obi Wan Skywalker"
        ],
        answer: "Old Ben"
    },
    {
        title: "What substance does Han Solo get frozen in?",
        choices: [
            "ice", "mercury", "carbonite", "unobtainium"
        ],
        answer: "carbonite"
    },
    {
        title: "What was the name of the furry creatures that help Han, Luke, and Leia on the forest moon of Endor?",
        choices: [
            "Firbees", "Greemlins", "Wookies", "Ewoks"
        ],
        answer: "Ewoks"
    },
    {
        title: "What is Leia's last name?",
        choices: [
            "Skywalker", "Organa", "Kenobi", "Palpatine"
        ],
        answer: "Organa"
    },
    {
        title: "Finn was previously a storm trooper. What was his call sign?",
        choices: [
            "FN 1337", "FN 2187", "FN 6785", "87 FINN"
        ],
        answer: "FN 2187"
    },
    {
        title: "After Leia is injured in an attack following the destruction of Star Killer Base, what officer takes her place?",
        choices: [
            "Admiral Holdo", "General Lando", "General Solo", "Admiral Ackbar"
        ],
        answer: "Admiral Holdo"
    },
    {
        title: "Who is Rey's biological grandparent?",
        choices: [
            "Anakin Skywalker", "Luke Skywalker", "Han Solo", "Sheev Palpatine"
        ],
        answer: "Sheev Palpatine"
    },
    {
        title: "What does Rey change her name to?",
        choices: [
            "Rey Skywalker", "Rey Solo", "Rey Palpatine", "Rey Kenobi"
        ],
        answer: "Rey Skywalker"
    }
]

var scoreMod = 0;

//function to determine if answer is  correct
function checkAnswer(userChoice, correctChoice, currentScore) {
    if (userChoice === correctChoice) {
        return currentScore;
    } else {
        return currentScore + 10;
    }
};

//function to show correct or wrong notification to user
function review(userChoice, correctChoice) {
    if (userChoice === correctChoice) {
        return 'Correct!';
    } else {
        return 'Wrong!';
    }
};

// the language of the quiz after the user hits begin 
$('#quizButton').click(function () {
    $('#window').empty();
    $('#window').text('Young Padawan, you will have 200 seconds to complete a 15 question text. The test must be completed before the timer expires. For every wrong answer, 10 seconds will be deducted. To become a Jedi Knight, you must score above 100. For those special few who can score above 150, they will be awared the rank of Jedi Master. Your timer is designated by the red Sith Lightsaber. Your progress is designated by the blue Jedi Lightsaber. Click below to begin.');
    $('#window').append('<hr>');
    $('#window').append('HEED THIS WARNING: If you have not completed your training by viewing Episodes I through IX, there will be spoilers.');
    $('#window').append('<hr>');
    $('#window').append('<button id="jedi">Begin</button>');
    $('#window').append('<hr>');
    $('#jedi').css('background-color','goldenrod');
    $('#jedi').click(function () {
        $('#window').empty();
        // change for the progress saber
        var j = 6;
        $('#light').width(j + '%');
        //change for the timer saber
        var i = 0;
        var timer = setInterval(function () {
            $("#dark").width(i / 2.2222222 + '%');
            i++;
            console.log(i);
            // if the timer expires, stop the countdown and show the score 
            if (i > 200) {
                console.log('this is working and the time has stopped');
                $('#window').empty();
                $('#answer').empty();
                clearInterval(timer);
                var score = 0;
                $('#window').append('<hr>');
                $('#window').append('You did not complete your entrance exam in the time alotted and therefore receive a score of ' + score + '.');
                $('#window').append('<hr>');
                $('#window').append('It is apparent you are a Sith. You must be destroyed.');
                $('#window').append('<hr>');
                $('#window').append('<img src="assets/images/sith.gif" syle="width:50%" />');
                $('#window').append('<a href="index.html"><button id="quizButton">Retake the Exam</button></a>');
            };
        }, 1000);
        timer;

        // dislay first question
        var q = 0;
        $('#window').text(questions[q].title);
        for (var k = 0; k < 4; k++) {
            $('#window').append('<br><button class="answers">' + questions[q].choices[k] + '</button>');
            $('.answers').css('background-color','goldenrod');
        };
        $(document).on('click', '.answers', function () {
            var userChoice = $(this).text().trim();
            i = checkAnswer(userChoice, questions[q].answer, i);
            $('#answer').text(review(userChoice, questions[q].answer));
            q++;
            // after the last question is answered, stop the countdown and show the score 
            if (q > 14) {
                console.log(scoreMod);
                $('#window').empty();
                $('#answer').empty();
                clearInterval(timer);
                var score = 200 - i - scoreMod;
                $('#window').text('Young Padawan, you have scored ' + score + '.');
                // determines what level the user given their score 
                if (score > 49) {
                    if (score > 149) {
                        $('#window').append('<hr>');
                        $('#window').append('You have been awarded the rank of JEDI MASTER.');
                        $('#window').append('<a href="index.html"><button id="quizButton">Retake the Exam</button></a>');
                    } if (score > 99) {
                        $('#window').append('<hr>');
                        $('#window').append('You have been awarded the rank of JEDI KNIGHT.');
                        $('#window').append('<a href="index.html"><button id="quizButton">Retake the Exam</button></a>');
                    } else {
                        $('#window').append('<hr>');
                        $('#window').append('You have been awarded the rank of JEDI IN TRAINING.');
                        $('#window').append('<a href="index.html"><button id="quizButton">Retake the Exam</button></a>');
                    };
                } else {
                    $('#window').append('<hr>');
                    $('#window').append('The Dark Side is strong with you, please come with me to the prison for reconditioning.');
                    $('#window').append('<a href="index.html"><button id="quizButton">Retake the Exam</button></a>');
                };
                return;
            };
            //display the next question
            j = j + 6;
            $('#light').width(j + '%');
            $('#window').text(questions[q].title);
            for (var k = 0; k < 4; k++) {
                $('#window').append('<br><button class="answers">' + questions[q].choices[k] + '</button>');
            }
            $('.answers').css('background-color','goldenrod');
            // remove the correct/wrong notification after 1 second 
            setTimeout(function () {
                $('#answer').empty();
            }, 1000);

        });
    });
});


// pull high scorese from local storage 

//click on button to create a question and four answers 
// also create a timer - countdown from 200
// clear the div by id window 
//


// list questions 
