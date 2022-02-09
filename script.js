var answers = [];
var questionCounter = 0;
var important = [];

var questionContainer = document.getElementById('question-container')
var startButton = document.getElementById('start-button');
var buttonContainer = document.getElementById('voting-buttons');
var selectWrapper = document.getElementById('select-wrapper');


// This initializes the buttons and the first question
let init = () => {
  createData();
  initButtons();
  question(questionCounter);
}

// This creates the buttons
let initButtons = () => {
  startButton.remove();
  buttonContainer.classList.remove('w3-hide');
  questionContainer.classList.remove('w3-hide');
}

// Init the selectables in the end screen
let initSelect = () => {
  console.log(subjects)
  subjects.forEach(element => {
    selectWrapper.classList.remove('w3-hide');

    let container = document.createElement('div');
    container.classList.add('select-container');

    let checkbox = document.createElement('input');
    checkbox.setAttribute("value", element.title);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", element.title);

    let label = document.createElement('label');
    label.setAttribute("for", element.title);
    label.innerText = element.title;
    
    container.appendChild(checkbox);
    container.appendChild(label);

    selectWrapper.appendChild(container);
  })
}


// This wil show the question
let question = (i) => {
  if (i < subjects.length) {
    questionContainer.childNodes[1].innerText = subjects[i].title;
    questionContainer.childNodes[3].innerText = subjects[i].statement;
  } else {
    handleFinish(); 
  }
}

// Creates the Calculation Data
let createData = () => {
  parties.forEach((party) => {
    answers.push({
      party: party.name,
      value: 0
    });
  })
}

// This calculates the
let voteButton = (v, questionCounter) => {
  if (v === 'pro') {
    subjects[questionCounter].parties.forEach(element => {
      if (element.position === 'pro') {
        answers.forEach(value => {
          if (value.party === element.name) {
            value.value++;
            console.log(value);
          }
        });
      }
    });
  } else if (v === "contra") {
    subjects[questionCounter].parties.forEach(element => {
      if (element.position === 'contra') {
        answers.forEach(value => {
          if (value.party === element.name) {
            value.value++;
            console.log(value);
          }
        });
      }
    });
  }
  this.questionCounter++
  question(this.questionCounter);
}

// This functions handles the end of the questions
let handleFinish = () => {
  initSelect();
  questionContainer.remove();
  const myNode = document.getElementById('button-wrapper');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

//
let submit = () =>{
  let checkboxes = document.getElementsByTagName('input');
  for(let checkbox of checkboxes){
    if(checkbox.checked){
      important.push(checkbox.value);
    }
  }
}

// Calculates which party is highest (in the room)
let calcParty = () => {

}