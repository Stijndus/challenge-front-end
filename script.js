var answers = [];
var questionCounter = 0;
var important = [];

var questionContainer = document.getElementById('question-container')
var startButton = document.getElementById('start-button');
var buttonContainer = document.getElementById('voting-buttons');
var selectWrapper = document.getElementById('select-wrapper');
var counter = document.getElementById('counter');


// This initializes the buttons and the first question
let init = () => {
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
  subjects.forEach(element => {
    selectWrapper.classList.remove('w3-hide');

    let container = document.createElement('div');
    container.classList.add('select-container');

    let checkbox = document.createElement('input');
    checkbox.setAttribute("value", element.title);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", element.title);
    checkbox.setAttribute("id", element.title);

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
    if(counter.classList.contains('w3-hide')) counter.classList.remove('w3-hide')

    counter.innerText = `${questionCounter + 1}/${subjects.length}`

    questionContainer.childNodes[1].innerText = subjects[i].title;
    questionContainer.childNodes[3].innerText = subjects[i].statement;
  } else {
    let unanswered = []
    answers.forEach((answer, index) => {
      if(answer.answer === null){
        unanswered.push(`‎ ${index + 1}`)
      }
    })
    if(unanswered.length > 0){
      alert(`Je hebt vraag${unanswered} niet ingevuld!`);
    } else {
      handleFinish()
    }
  }
}

// This calculates the
let voteButton = (v, i) => {
  if (!answers[i]) {
    if (v === 'pro') {
      answers.push({
        title: subjects[i].title,
        answer: v,
        important: false
      });
    } else if (v === "contra") {
      answers.push({
        title: subjects[i].title,
        answer: v,
        important: false
      })
    } else {
      answers.push({
        title: subjects[i].title,
        answer: v,
        important: false,
      })
    }
  } else {
    if (v === 'pro') {
      answers[i].answer = v
    } else if (v === "contra") {
      answers[i].answer = v;
    } else {
      answers[i].answer = v
    }
  }
  this.questionCounter++
  question(this.questionCounter);
}

// This functions handles the end of the questions
let handleFinish = () => {
  initSelect();
  questionContainer.remove();
  counter.remove()
  const myNode = document.getElementById('button-wrapper');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

//
let submit = () => {
  let checkboxes = document.getElementsByTagName('input');
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      important.push(checkbox.value);
    }
  }
  setFinalAnswers();
}

// Calculates which party is highest (in the room)
let setFinalAnswers = () => {
  let data = []
  parties.forEach(party => {
    data.push({
      name: party.name,
      value: 0
    })
  })
  answers.forEach(answer => {
    important.forEach(title => {
      if (answer.title === title) {
        answer.important = true;
      }
    })
  })
  calcParty(data);
}

let calcParty = (data) => {
  answers.forEach(answer => {
    subjects.forEach(subject => {
      if (subject.title === answer.title) {
        subject.parties.forEach(party => {
          if (answer.answer === party.position) {
            data.forEach(data => {
              if (party.name === data.name) {
                if (answer.important) {
                  data.value = data.value + 2;
                } else {
                  data.value = data.value + 1;
                }
              }
            })
          }
        })
      }
    })
  })
  data.sort((a, b) => {
    return b.value - a.value;
  })

  handleEnd(data);
}

let handleEnd = (data) => {
  while (selectWrapper.firstChild) {
    selectWrapper.removeChild(selectWrapper.lastChild);
  }


  let title = document.createElement('h3')
  title.innerText = 'Resultaat'
  title.classList.add('submit-button');
  selectWrapper.appendChild(title);

  data.forEach((element, index) => {
    let p = document.createElement('p');
    p.innerText = `${index + 1}. ${element.name} ${calcPercentage(element.value)}%`
    p.classList.add('select-container')
    selectWrapper.appendChild(p);
  })
}

let calcPercentage = (val) => {
  let totalPoints = subjects.length + important.length;
  return ((100 * val) / totalPoints).toFixed(2);
}

let handleBackClick = () => {
  if (questionCounter === 0) {
    return location.reload();
  }

  questionCounter--
  question(questionCounter);
}

let handleSkipClick = () => {
  if (!answers[questionCounter]) {
    answers.push({
      title: subjects[questionCounter].title,
      answer: null,
      important: false
    });
  }
  questionCounter++
  question(questionCounter);
}