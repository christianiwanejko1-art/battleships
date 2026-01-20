const body = document.body


const SHIP_TEMPLATES = {
  Carrier: { name: "Carrier", length: 5, position: null, hits: 0 },
  Battleship: { name: "Battleship", length: 4, position: null, hits: 0 },
  Destroyer: { name: "Destroyer", length: 3, position: null, hits: 0 },
  Submarine: { name: "Submarine", length: 3, position: null, hits: 0 },
  PatrolBoat: { name: "Patrol Boat", length: 2, position: null, hits: 0 },
};

class Ship {
  static ships = structuredClone(SHIP_TEMPLATES);

  static reset() {
    Ship.ships = structuredClone(SHIP_TEMPLATES);
  }

  hit(shipName, cellId) {
    
  }
  isSunk() {}
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


let current = ['Patrol Boat', 'Submarine', 'Destroyer', 'Battleship', 'Carrier'];
const withinBounds = (n) => n >= 1 && n <= 100;
let btnState = 'Horizontal'
let gameStarted = false;

function createBoard() {
    const input = document.getElementById('name').value;
    body.innerHTML = '';
    const home = document.createElement('div');
    home.id = 'play';

    const link = document.createElement('a');
    link.href = 'index.html';
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Home';
    link.appendChild(title);

    const board = document.createElement('div');
    board.id = 'board';
    const enemyContainer = document.createElement('div');
    enemyContainer.id = 'enemyContainer';
    const enemyContainerTitle = document.createElement('h1');
    enemyContainerTitle.textContent = `Enemy's board`;
    const startBtn = document.createElement('button');
    startBtn.id = 'startBtn';
    startBtn.textContent = 'Start';
    const enemy = document.createElement('div');
    enemy.id = 'enemy';
    const yourContainer = document.createElement('div');
    yourContainer.id = 'yourContainer';
    const yourContainerTitle = document.createElement('h1');
    yourContainerTitle.textContent = 'Your board';
    yourContainerTitle.id = 'yourContainerTitle'
    const buttons = document.createElement('div');
    buttons.id = 'buttons';
    const yourResetBoard = document.createElement('button');
    yourResetBoard.id = 'yourResetBoard';
    yourResetBoard.textContent = 'Reset';
    const yourRotate = document.createElement('button');
    yourRotate.id = 'yourRotate';
    yourRotate.textContent = 'Vertical';
    enemyContainerTitle.textContent = `Enemy's board`;
    enemyContainerTitle.id = 'enemyContainerTitle';
    const your = document.createElement('div');
    buttons.append(yourResetBoard, yourRotate);
    your.id = 'your';

    // populate grid
let arr = [2, 3, 3, 4, 5]; // IMPORTANT: outside loop so it persists

function removeOne(arr, value) {
  const idx = arr.indexOf(value);
  if (idx !== -1) arr.splice(idx, 1);
}


const idsToColor = [];


for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.id = i + 1;
    
  cell.addEventListener('mouseenter', handleEnter);
cell.addEventListener('mouseleave', handleLeave);
  

  cell.addEventListener('click', (e) => {


    const id = Number(e.currentTarget.dataset.id);

    // choose what length to place next (5 first, then 4, then 3, then 3, then 2)
    let length = null;
    if (arr.includes(5)) length = 5;
    else if (arr.includes(4)) length = 4;
    else if (arr.includes(3)) length = 3;
    else if (arr.includes(2)) length = 2;
    else return; // nothing left to place
    if (idsToColor && btnState === 'Horizontal'){
            // collect cells to color: id, id-1, id-2 ... (length cells total)
        const idsToColor = [];
        for (let k = 0; k < length; k++) {
        idsToColor.push(id - k);
        }
        

        // stop if any id is invalid (prevents null errors at edges)
        if (idsToColor.some(n => n < 1)) return;
        if (idsToColor.slice(1).some(num => num % 10 === 0)) return;
        if (idsToColor.some(x => document.querySelector(`[data-id="${x}"]`).classList.contains('placed'))) return;

        console.log(current)


        if (current.at(-1) === 'Carrier'){
            Ship.ships.Carrier.position = idsToColor;
        }     if (current.at(-1) === 'Battleship'){
            Ship.ships.Battleship.position = idsToColor;
        }     if (current.at(-1) === 'Destroyer'){
            Ship.ships.Destroyer.position = idsToColor;
        }     if (current.at(-1) === 'Submarine'){
            Ship.ships.Submarine.position = idsToColor;
        }     if (current.at(-1) === 'Patrol Boat'){
            Ship.ships.PatrolBoat.position = idsToColor;
        }
        idsToColor.forEach(n => {
        const el = document.querySelector(`[data-id="${n}"]`);
        if (el) el.style.backgroundColor = 'blue';
            el.classList.add('placed');
        });
        }

    if (idsToColor && btnState === 'Vertical'){
        let idsToColor = [];
        for (let k = 0; k < length; k++) {
        idsToColor.push(id - (k*10));
        }

        console.log(idsToColor)
            // stop if any id is invalid (prevents null errors at edges)
        if (idsToColor.some(n => n < 1)) return;
        if (idsToColor.some(x => document.querySelector(`[data-id="${x}"]`).classList.contains('placed'))) return;

        if (current.at(-1) === 'Carrier'){
            Ship.ships.Carrier.position = idsToColor;
        }     if (current.at(-1) === 'Battleship'){
            Ship.ships.Battleship.position = idsToColor;
        }     if (current.at(-1) === 'Destroyer'){
            Ship.ships.Destroyer.position = idsToColor;
        }     if (current.at(-1) === 'Submarine'){
            Ship.ships.Submarine.position = idsToColor;
        }     if (current.at(-1) === 'Patrol Boat'){
            Ship.ships.PatrolBoat.position = idsToColor;
        }
        idsToColor.forEach(n => {
        const el = document.querySelector(`[data-id="${n}"]`);
        if (el) el.style.backgroundColor = 'blue';
            el.classList.add('placed');
        });

        }    
        console.log(current)

        // remove ONE instance of that ship length
        removeOne(arr, length);

        console.log('remaining ships:', arr);
        current.pop()
        console.log(Ship.ships)
  });


  your.appendChild(cell);
   }
    let curCell = []

    function handleEnter(e){
        const curCell2 = Number(e.currentTarget.dataset.id);
    if(btnState === 'Horizontal'){
     if (current[current.length - 1] === 'Carrier') {
        if ([curCell2, curCell2-1, curCell2-2, curCell2-3, curCell2-4].some(n => n < 1)) return;
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-1))
            curCell.push(String(curCell2-2))
            curCell.push(String(curCell2-3))
            curCell.push(String(curCell2-4))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }   
    if (current[current.length - 1] === 'Battleship'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-1, curCell2-2, curCell2-3].some(n => n < 1)) return; 
        curCell.push(String(curCell2))
            curCell.push(String(curCell2-1))
            curCell.push(String(curCell2-2))
            curCell.push(String(curCell2-3))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Destroyer'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-1, curCell2-2].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-1))
            curCell.push(String(curCell2-2))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Submarine'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-1, curCell2-2].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-1))
            curCell.push(String(curCell2-2))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Patrol Boat'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-1].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-1))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
    } 
    if(btnState === 'Vertical'){
     if (current[current.length - 1] === 'Carrier') {
        if ([curCell2, curCell2-10, curCell2-20, curCell2-30, curCell2-40].some(n => n < 1)) return;
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-10))
            curCell.push(String(curCell2-20))
            curCell.push(String(curCell2-30))
            curCell.push(String(curCell2-40))
            console.log(Number(curCell2))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }   
    if (current[current.length - 1] === 'Battleship'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-10, curCell2-20, curCell2-30].some(n => n < 1)) return; 
        curCell.push(String(curCell2))
            curCell.push(String(curCell2-10))
            curCell.push(String(curCell2-20))
            curCell.push(String(curCell2-30))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Destroyer'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-10, curCell2-20].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-10))
            curCell.push(String(curCell2-20))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Submarine'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-10, curCell2-20].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-10))
            curCell.push(String(curCell2-20))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
        if (current[current.length - 1] === 'Patrol Boat'){
            const curCell2 = Number(e.currentTarget.dataset.id);
        if ([curCell2, curCell2-10].some(n => n < 1)) return;            
            curCell.push(String(curCell2))
            curCell.push(String(curCell2-10))
            curCell.forEach((x)=>{
                document.querySelector(`[data-id="${x}"]`).style.backgroundColor = 'blue';
            })
        }
    } 
    }

    function handleLeave(e){
        curCell.forEach((x)=>{
            if (!withinBounds(x)) return;
            const el = document.querySelector(`[data-id="${x}"]`)
            if (el.classList.contains('placed')) return;
            document.querySelector(`[data-id="${x}"]`).style.backgroundColor = '';
            })
        curCell = []
    }
    if (current.length === 0) {
    your.removeEventListener('mouseenter', handleEnter);
    }
        if (current.length === 0) {
    your.removeEventListener('mouseleave', handleLeave);
    }
    yourContainer.appendChild(yourContainerTitle);
    enemyContainer.append(enemyContainerTitle, startBtn);
    enemyContainer.appendChild(enemy);
    yourContainer.append(your,buttons);
    board.append(enemyContainer, yourContainer);
    home.appendChild(board);
    body.append(home, link)

function createEnemy() {
    for (let i = 100; i < 200; i++) {
        const cellE = document.createElement('div');
        cellE.classList.add('cellE');
        cellE.dataset.id = i + 1;
        cellE.style.border = '0.5px solid rgba(0, 0, 0, 0.07)';

        
        const enemy = document.getElementById('enemy');
        enemy.style.border = '1px solid grey';
        enemy.appendChild(cellE);
    }
}

// vertical / horizontal button - save state
const yourRotateBtn = document.getElementById('yourRotate');
yourRotateBtn.addEventListener('click', () => {
    if (yourRotateBtn.textContent === 'Vertical'){
        yourRotateBtn.textContent = 'Horizontal';
        btnState = 'Vertical';
    } else {
        yourRotateBtn.textContent = 'Vertical';
        btnState = 'Horizontal';
    }

})

const reset = document.getElementById('yourResetBoard');
reset.addEventListener('click', ()=>{
    const placedCells = document.querySelectorAll('.placed');
    placedCells.forEach((cell)=> {
        cell.style.backgroundColor = '';
        cell.classList.remove('placed');
    })
    current = ['Patrol Boat', 'Submarine', 'Destroyer', 'Battleship', 'Carrier'];
    arr = [2, 3, 3, 4, 5]
    Ship.reset()
    gameStarted = false;
    const cellE4 = document.querySelectorAll('.cellE');
    cellE4.forEach(cell => {
        cell.style.border = '0.5px solid rgba(0, 0, 0, 0.07)';
        const enemy = document.getElementById('enemy');
        enemy.style.border = '1px solid grey';
    })
    const startBTN = document.getElementById('startBtn');
    startBTN.style.display = '';
        


})

const start = document.getElementById('startBtn');
start.addEventListener('click',()=>{
    if (current.length === 0 && gameStarted === false){
        console.log('game started');
        gameStarted = true
        const cellsE3 = document.querySelectorAll('.cellE');
        const enemyCell = document.getElementById('enemy');
        enemyCell.style.border = '2px solid black'
        cellsE3.forEach((item)=> item.style.border = '0.5px solid rgba(0, 0, 0, 0.226)')
        const startBTN = document.getElementById('startBtn');
        startBTN.style.display = 'none';
        
        const enemyShips = new Ship()
        let arr = [2,3,3,4,5];

        const cells = document.querySelectorAll('.cellE');
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomState;
        let enemyCurrent = ['Patrol Boat', 'Submarine', 'Destroyer', 'Battleship', 'Carrier'];
        while (enemyCurrent.length !== 0){
            const n = randomInt(101, 200);
            const n2 = randomInt(1,2);
            if (n2 === 1){
                randomState = 'Horizontal';
            } else {
                randomState = 'Vertical';
            }
            
            let el = document.querySelector(`[data-id="${n}"]`);
            console.log(el);
            el.style.backgroundColor = 'blue';
            if (true){
             enemyCurrent.pop()
            }
            // while (enemyCurrent.length !== 0){
            //     enemyCurrent.pop()
            // }
        }
            
        }
    })

createEnemy()
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


module.exports = { createHome, createBoard }