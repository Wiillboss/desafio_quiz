let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();


//functions
function showQuestion() {
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        let pct = (currentQuestion / questions.length)*100;

        document.querySelector('.progress--bar').style.width = `${pct}%`;
        document.querySelector9('.scorePct').style.color = '#FF0000';

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option"><span>${[parseInt(i)+1]}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent);
        })

    }else{

    }
}

function optionClickEvent(e) {
    let clickdOptions = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickdOptions){
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}