let initButtons = (buttons) => {
    document.getElementById('start-button').remove()
    for(i=0; i != buttons.length; i++){
        btns = document.createElement('button');
        btns.innerText = buttons[i].title
        document.getElementById('button-wrapper').appendChild(btns);
    }
}

