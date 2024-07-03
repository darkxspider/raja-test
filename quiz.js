document.addEventListener('DOMContentLoaded', (event) => {
    const quizContainer = document.getElementById('quiz-container');

    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correctAnswer: "Pacific"
        }
    ];

    function loadQuiz(questions) {
        questions.forEach((questionData, index) => {
            // Create question container
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            // Create question text
            const questionText = document.createElement('p');
            questionText.textContent = (index + 1) + '. ' + questionData.question;
            questionDiv.appendChild(questionText);

            // Create answers list
            const answersList = document.createElement('ul');
            answersList.className = 'answers';

            questionData.answers.forEach(answer => {
                const answerItem = document.createElement('li');

                const answerLabel = document.createElement('label');
                const answerInput = document.createElement('input');
                answerInput.type = 'radio';
                answerInput.name = 'question' + index;
                answerInput.value = answer;

                answerLabel.appendChild(answerInput);
                answerLabel.appendChild(document.createTextNode(answer));
                answerItem.appendChild(answerLabel);

                answersList.appendChild(answerItem);
            });

            questionDiv.appendChild(answersList);
            quizContainer.appendChild(questionDiv);
        });
    }

    loadQuiz(quizQuestions);
});