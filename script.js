var data = [];



// This initializes the buttons and the first question
let init = (buttons) => {
    createData();
    initButtons(buttons);
    question(0);
}

// This creates the buttons

let initButtons = (buttons) => {
    document.getElementById('start-button').remove()
    for(i=0; i < buttons.length; i++){
        let btn = document.createElement('button');
        btn.innerText = buttons[i].title;
        btn.className = 'w3-button';
        calcBtnColor(buttons[i].title, btn);
        document.getElementById('button-wrapper').appendChild(btn);
    }
    document.getElementById('question-container').classList.remove('w3-hide');
}

// This calculates the color of the buttons
let calcBtnColor = (val, btn) => {
    switch(val){
        case 'Eens': 
            btn.className += ' w3-green';
            break;
        case 'Oneens': 
            btn.className += ' w3-red';
            break;
        default:
            btn.className += ' w3-grey';
            break;
    }
}

// This wil show the question
let question = (i) => {
    document.getElementById('question-container').childNodes[1].innerText = subjects[i].title;
    document.getElementById('question-container').childNodes[3].innerText = subjects[i].statement;
}

// Creates the Calculation Data
let createData = () => {
    parties.forEach((party) => {
        data.push( {
            party: party.name,
            value: 0
        })
    })
}

// This calculates the