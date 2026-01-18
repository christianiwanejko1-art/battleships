const body = document.body

class Ship{
    'ships' = {'name': 'Carrier', 'length': 5, 'position': null,
        "name": 'Battleship', 'length' : 4, 'position': null,
        "name": 'Cruiser', 'length' : 3, 'position': null,
        "name": 'Submarine', 'length' : 3, 'position': null,
        "name": 'Destroyer', 'length' : 2, 'position': null
    }
    hit(){

    }
    isSunk(){

    }
}


class gameBoard{
    // track the state of the player board

    receiveAttack(){

    }
    missedAttack(){

    }
    sunkenShip(){

    }
}

function Player(){
    // real players 
    // computer players
}

function createBoard() {
    const input = document.getElementById('name').value;
    body.innerHTML = '';
    const home = document.createElement('div');
    home.id = 'play';

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Home';

    const board = document.createElement('div');
    board.id = 'board';
    const enemy = document.createElement('div');
    enemy.id = 'enemy';
    const your = document.createElement('div');
    your.id = 'your';
    // const enemyTitle = document.createElement('h1');
    // enemyTitle.textContent = `Enemy board`
    // const yourTitle = document.createElement('h1');
    // yourTitle.textContent = 'Your board';
    // enemy.appendChild(enemyTitle);
    // your.appendChild(yourTitle);

    // populate grid
    for(let i=0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell.dataset.id = i+1;
        your.appendChild(cell);
    }
    board.append(enemy, your);
    home.appendChild(board);
    body.append(home, title)
}


function createHome() {
    body.innerHTML = '';
    const home = document.createElement('div');
    home.id = 'home';

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    const form = document.createElement('div');
    form.id = 'form';
    const battleshipH1 = document.createElement('h1');
    battleshipH1.textContent = 'BATTLESHIP';
    const combatnameH2 = document.createElement('h2');
    combatnameH2.textContent = 'ENTER COMBAT NAME:'
    const form1 = document.createElement('form');
    const form1input = document.createElement('input');
    form1input.type = 'text';
    form1input.id = 'name';
    form1.append(form1input);

    const button = document.createElement('button');
    button.id = 'submit';
    button.type = 'submit';
    button.textContent = 'ENTER COMBAT';
    button.addEventListener('click', () => {
        createBoard();
    })

    form.append(battleshipH1, combatnameH2, form1, button);
    home.append(form);
    body.append(home);
}



module.exports = {createHome, createBoard}