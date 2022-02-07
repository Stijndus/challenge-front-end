let initButtons = (buttons) => {
    document.getElementById('start-button').remove()
    for(i=0; i <= buttons.length; i++){
        let btn = document.createElement('button');
        btn.innerText = buttons[i].title;
        btn.className = 'w3-button';
        calcBtnColor(buttons[i].title, btn);
        document.getElementById('button-wrapper').appendChild(btn);
    }
}

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
    }
}

