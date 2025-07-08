const quizData = [
  {
    question: "Q1: What is the data type of NaN?",
    options: ["string", "number", "boolean", "object"],
    correct: 1
  },
  {
    question: "Q2: What is the const keyword used for?",
    options: ["Loop", "Condition", "Constant", "Function"],
    correct: 2
  },
  {
    question: "Q3: Which symbol is used for arrow functions?",
    options: ["=>", "->", ":=", "::"],
    correct: 0
  },
  {
    question: "Q4: What does the === operator compare exactly?",
    options: ["Assign", "Compare", "Declare", "None"],
    correct: 1
  },
  {
    question: "Q5: What result does typeof null return?",
    options: ["null", "object", "undefined", "string"],
    correct: 1
  },
  {
    question: "Q6: What is let keyword mainly used for?",
    options: ["Declare", "Compare", "Loop", "Print"],
    correct: 0
  }
];

//initialization
const scores=document.querySelector(".score")

const answerElm = document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4] =
document.querySelectorAll(
   " #question,.option_1,.option_2,.option_3,.option_4"
);
const submitBtn= document.querySelector("#submit");
const timerElm = document.getElementById("timer");

let  currentQuiz =0;
let score=0;

let timeLeft = 15;
let timerId;


function updateTimerDisplay() {
    timerElm.innerText = `Time Left: ${timeLeft}s`;
}


function startTimer() {
    clearInterval(timerId);
    timeLeft = 15;
    updateTimerDisplay();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerId);
            submitBtn.click(); 
        }
    }, 1000);
}
// load quiz



const loadQuiz= ()=>{
    clearInterval(timerId); 
    timeLeft = 15;
    updateTimerDisplay();
    startTimer();

    const{question,options}=quizData[currentQuiz];
    console.log(options);
    questionElm.innerText =question;
    scores.innerText= `score:${score}/${quizData.length}`

    options.forEach((curOption,index)=> (window[`option_${index+1}`].innerText=curOption))
};
loadQuiz();
// get selected ans- 

const   getSelectedOption= ()=>{
    let ans_index;
    answerElm.forEach((curOption,index)=>{
        if(curOption.checked){
            ans_index= index;
        }
    })
    return ans_index
}
 const deselectedAnswers=()=>{
    answerElm.forEach(curElm=> curElm.checked= false);
 }
submitBtn.addEventListener('click',()=>{
     clearInterval(timerId);
    selectedOptionIndex = getSelectedOption();
    // console.log(selectedOptionIndex);

    // score increase
        if (selectedOptionIndex=== quizData[currentQuiz].correct){
            score+=1;
        }

     currentQuiz++;
    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
       quiz.innerHTML = `
  <div class="result">
    <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
   

    <p  id= "resultStatus"> ${
      score === quizData.length
        ? "Excellent! "
        : score >= quizData.length / 2
        ? "Good job! "
        : "Keep trying! "
    }</p>
    <button id="reload-button" onclick="location.reload()">Restart Quiz</button>
  </div>
`;
    }
    
})