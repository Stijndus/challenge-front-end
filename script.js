let initButtons = (buttons) => {
    for(i=0; i != buttons.length; i++){
        btns = document.createElement('button');
        btns.innerText = buttons[i].title
        document.getElementById('button-wrapper').appendChild(btns);
    }
}

