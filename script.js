let initButtons = (buttons) => {
    for(i=0; i != buttons.length; i++){
        console.log("kanker")
        btns = document.createElement('button');
        btns.innerText = 'test'
        document.getElementById('button-wrapper').appendChild(btns);
    }
}

