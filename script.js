var data = [];
var questionCounter = 0;

// This initializes the buttons and the first question
let init = (buttons) => {
  createData();
  initButtons(buttons);
  question(0);
}

// This creates the buttons

let initButtons = (buttons) => {
  document.getElementById('start-button').remove()
  for (i = 0; i < buttons.length; i++) {
    let btn = document.createElement('button');
    btn.innerText = buttons[i].title;
    btn.className = 'w3-button w3-round-large';
    calcBtnColor(buttons[i].title, btn);
    document.getElementById('button-wrapper').appendChild(btn);
  }
  document.getElementById('question-container').classList.remove('w3-hide');
}

// This calculates the color of the buttons
let calcBtnColor = (val, btn) => {
  switch (val) {
    case 'Eens':
      btn.className += ' w3-green';
      btn.setAttribute("onclick", "voteButton('pro', questionCounter)")
      break;
    case 'Oneens':
      btn.className += ' w3-red';
      btn.setAttribute("onclick", "voteButton('contra', questionCounter)")
      break;
    default:
      btn.className += ' w3-grey';
      btn.setAttribute("onclick", "voteButton('', questionCounter)")
      break;
  }
}

// This wil show the question
let question = (i) => {
 let questionContainer = document.getElementById('question-container')
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