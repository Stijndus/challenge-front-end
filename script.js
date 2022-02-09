var data = [];
var questionCounter = 0;

var questionContainer = document.getElementById('question-container')
var startButton = document.getElementById('start-button');
var buttonContainer = document.getElementById('voting-buttons')


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

// This wil show the question
let question = (i) => {
  if (i < subjects.length) {
    questionContainer.childNodes[1].innerText = subjects[i].title;
    questionContainer.childNodes[3].innerText = subjects[i].statement;
  } else {
    questionContainer.remove()
    const myNode = document.getElementById('button-wrapper');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }
}

// Creates the Calculation Data
let createData = () => {
  parties.forEach((party) => {
    data.push({
      party: party.name,
      value: 0
    })
  })
}

// This calculates the
let voteButton = (v, questionCounter) => {
  if (v === 'pro') {
    subjects[questionCounter].parties.forEach(element => {
      if (element.position === 'pro') {
        data.forEach(value => {
          if (value.party === element.name) {
            value.value++
            console.log(value);
          }
        });
      }
    });
  } else if (v === "contra") {
    subjects[questionCounter].parties.forEach(element => {
      if (element.position === 'contra') {
        data.forEach(value => {
          if (value.party === element.name) {
            value.value++
            console.log(value);
          }
        });
      }
    });
  } 
  this.questionCounter++
  question(this.questionCounter);
}

// Calculates which party is highest (in the room)

let calcParty = () => {
    
}