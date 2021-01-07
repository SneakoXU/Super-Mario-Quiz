const fire = document.getElementById('fireBtn');
const shroom = document.querySelector('#shroomBtn');
const acorn = document.querySelector('#acornBtn');
const ice = document.querySelector('#iceBtn');
let score = 0;
let userCount = 1;
let totalQuestionCount = 10;
let shuffle
let correctAnswer



const questions= [
    {
        question: 'Select the power-up that makes Mario bigger.',
        answer: shroom
    },
    {
        question: 'Select the power-up that gives you the power to glide in the air.',
        answer: acorn
    },
    {
        question: 'Select the power-up that gives you the power to throw fireballs.',
        answer: fire
    },
    {
        question: 'Select the power-up that gives you the power to throw iceballs.',
        answer: ice
    },
    {
        question: 'Uh oh, a penguin is sliding toward Mario. What power-up does he need?',
        answer: ice
    },
    {
        question: "It's me Mario! Help me select a power-up to deliver extra damage to fire enemies.",
        answer: ice
    },
    {
        question: 'Mario is at Frosted Glacier, what power-up can he find in this world to help him freeze enemies?',
        answer: ice
    },
    {
        question: 'Mario made it halfway through the level! What power-up are you given when you go through the halfway flag?',
        answer: shroom
    },
    {
        question: 'This power-up is red with white spots.',
        answer: shroom
    },
    {
        question: 'This power-up has your favorite color on it.',
        answer: shroom
    },
    {
        question: 'Mario sees something high up but I cannot get there with his regular jump. What power-up does he need? ',
        answer: acorn
    },
    {
        question: 'What power-up do Waddlewings sometimes carry?',
        answer: acorn
    },
    {
        question: 'Mario has turned into Flying Squirrel Mario. What power-up did he get?',
        answer: acorn
    },
    {
        question: 'This power-up gives Mario the ability to stick to walls for a few seconds.',
        answer: acorn
    },
    {
        question: 'This is your favorite power-up to get use in Tilted Tunnel.',
        answer: fire
    },
    {
        question: 'What power-up does Mario need to use in order to get rid of Piranha Plants in Acorn Plains?',
        answer: fire
    },
    {
        question: 'When Mario gets this power-up, the regular Mario outfit transforms into a super cool red and white outfit. What power-up does this to Mario?',
        answer: fire
    },
]

reload();
document.addEventListener('DOMContentLoaded', () =>{
/* 
    const answerButtons = document.querySelectorAll('#answer-buttons img').forEach( (choice) => {
        choice.addEventListener('click', (event) => {
            answerQuestion(event);
            updateScore();
            //update problem count or end game
            reload();
        })
    }) */


    fire.addEventListener('click', (event) => {
        answerQuestion(event);
        updateScore();
        reload();
    });
    shroom.addEventListener('click', (event) => {
        answerQuestion(event);
        updateScore();
        reload();
    });
    acorn.addEventListener('click', (event) => {
        answerQuestion(event);
        updateScore();
        reload();
    });
    ice.addEventListener('click', (event) => {
        answerQuestion(event);
        updateScore();
        reload();
    });



});



function reload(){
    
    shuffle = questions.sort(() => Math.random() - .5);
    displayQuestion(shuffle[0]);

}

function displayQuestion(randomQuestion){
    const questionDisplay = document.querySelector('#question');
    questionDisplay.innerText = randomQuestion.question;
    correctAnswer = questionDisplay.answer;
}


function answerQuestion(event){
    let isCorrect = (event.target == correctAnswer) ? true : false;
   
    if(isCorrect){
      score += 100;
    }
}    

function updateScore(){
    document.querySelector('#score').innerHTML = "SCORE: " + score;
}