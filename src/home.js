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

  hit() {
    
  }
  isSunk() {}
}

class ShipEnemy {
  static ships = structuredClone(SHIP_TEMPLATES);

  static reset() {
    Ship.ships = structuredClone(SHIP_TEMPLATES);
  }

  hit() {
    
  }
  isSunk() {}
}

function hasShipAtCell(shipsObj, cellId){
    return Object.values(shipsObj).some(
        ship => ship.position?.includes(cellId)
    );
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
let playerTurn = false;

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
        cellE.addEventListener('click',handlePlayerClick);
        
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
    const selectCells = document.querySelectorAll('.cellE');
    selectCells.forEach((cell)=> {
        cell.textContent = '';
        cell.style.color = 'black'
        cell.style.backgroundColor = '';
    })
    selectCells.forEach(cell => {
        cell.style.border = '0.5px solid rgba(0, 0, 0, 0.07)';
        const enemy = document.getElementById('enemy');
        enemy.style.border = '1px solid grey';
    })
    const startBTN = document.getElementById('startBtn');
    startBTN.style.display = '';
    const selectYour = document.querySelectorAll('.cell');
    selectYour.forEach((cell)=>{
        cell.textContent = '';
        cell.style.color = '';
        cell.style.border = '';
        cell.style.backgroundColor = '';
    })



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
        

        let arr = [2,3,3,4,5];

        const cells = document.querySelectorAll('.cellE');
        let arr2 = [2, 3, 3, 4, 5]; // ship lengths
        let results = [];          // array of ship position arrays

        function randomInt101to200() {
        return Math.floor(Math.random() * 100) + 101;
        }

        function randomOneOrTwo() {
        return Math.floor(Math.random() * 2) + 1; // 1 or 2
        }

        function isOutOfBounds(posArr) {
        return posArr.some(n => n <= 100 || n >= 201);
        }

        // Horizontal wrap check for a 10-wide grid (101–200).
        // If you move left from 110 -> 109 that's fine, but you must not cross rows.
        // A simple rule for "moving left": all cells must stay on the same row.
        function crossesRow(posArr) {
        const row = Math.floor((posArr[0] - 101) / 10);
        return posArr.some(n => Math.floor((n - 101) / 10) !== row);
        }

        function buildShipPositions(start, length, orientation) {
        const pos = [start]; // include starting cell
        for (let step = 1; step < length; step++) {
            if (orientation === 1) {
            // horizontal (to the left)
            pos.push(start - step);
            } else {
            // vertical (upwards)
            pos.push(start - step * 10);
            }
        }
        return pos;
        }

        function isValidPlacement(posArr, orientation) {
        if (isOutOfBounds(posArr)) return false;
        if (orientation === 1 && crossesRow(posArr)) return false;
        return true;
        }

        // Generate placements for each ship length
        for (let idx = 0; idx < arr2.length; idx++) {
        const length = arr2[idx];
        let placed = false;

        while (!placed) {
            const start = randomInt101to200();
            const orientation = randomOneOrTwo(); // 1 = horizontal, 2 = vertical
            const posArr = buildShipPositions(start, length, orientation);

            if (isValidPlacement(posArr, orientation)) {
            results.push(posArr);
            
            placed = true;
            }
        }
        }
        let arrShips = ['Patrol Boat', 'Submarine', 'Destroyer', 'Battleship', 'Carrier']
        
        console.log(results)
        ShipEnemy.ships.Carrier.position = results[results.length-1];
        ShipEnemy.ships.Battleship.position = results[results.length-2];
        ShipEnemy.ships.Destroyer.position = results[results.length-3];
        ShipEnemy.ships.Submarine.position = results[results.length-4];
        ShipEnemy.ships.PatrolBoat.position = results[results.length-5];
        }
        console.log(ShipEnemy.ships);
        playerTurn = true;

    })
const handlePlayerClick = function (e) {
    if (gameStarted && playerTurn){
            const cellId2 = Number(e.currentTarget.dataset.id);
            const cell = document.querySelector(`[data-id="${cellId2}"]`)
        if (hasShipAtCell(ShipEnemy.ships, cellId2) && playerTurn){
            cell.textContent = 'X';
            cell.style.color = 'rgba(213, 7, 7, 0.8)';
            cell.style.border = '1px solid rgba(213, 7, 7, 0.8)';
            cell.style.backgroundColor = 'rgba(213, 7, 7, 0.19)';
        } else if (playerTurn) {
            cell.textContent = 'O';
            playerTurn = false;
            console.log('enemy turn');
            handleEnemyTurn();
        }       
    }

}

let winCounter = 0;
function getNeighbours(id) {
  const neighbours = [];

  const row = Math.ceil(id / 10);

  // left
  if (id - 1 >= 1 && Math.ceil((id - 1) / 10) === row) {
    neighbours.push(id - 1);
  }

  // right
  if (id + 1 <= 100 && Math.ceil((id + 1) / 10) === row) {
    neighbours.push(id + 1);
  }

  // up
  if (id - 10 >= 1) {
    neighbours.push(id - 10);
  }

  // down
  if (id + 10 <= 100) {
    neighbours.push(id + 10);
  }

  return neighbours;
}

let lastCellId = null;

const handleEnemyTurn = function () {
  // if hunting (we have a previous hit)
  if (winCounter > 0 && lastCellId !== null) {
    // only choose neighbours that haven't been shot yet
    const neighbours = getNeighbours(lastCellId).filter((nid) => {
      const c = document.querySelector(`[data-id="${nid}"]`);
      return c && c.textContent !== "X" && c.textContent !== "O";
    });

    if (neighbours.length === 0) {
      // no valid neighbours left → stop hunting
      winCounter = 0;
      lastCellId = null;
      return handleEnemyTurn();
    }

    const targetId = neighbours[Math.floor(Math.random() * neighbours.length)];
    const cell2 = document.querySelector(`[data-id="${targetId}"]`);

    if (hasShipAtCell(Ship.ships, targetId)) {
      cell2.textContent = "X";
      cell2.style.color = "rgba(213, 7, 7, 0.8)";
      cell2.style.border = "1px solid rgba(213, 7, 7, 0.8)";
      cell2.style.backgroundColor = "rgba(213, 7, 7, 0.19)";

      // ✅ hit → update last hit and go again
      lastCellId = targetId;
      winCounter = 1;
      return handleEnemyTurn();
    } else {
      // ✅ miss → mark THIS cell (cell2), reset hunt, give turn back
      cell2.textContent = "O";
      playerTurn = true;
      winCounter = 0;
      lastCellId = null;
      return;
    }
  }

  // otherwise random shot
  let id, cell;

  do {
    id = Math.floor(Math.random() * 100) + 1;
    cell = document.querySelector(`[data-id="${id}"]`);
  } while (!cell || cell.textContent === "X" || cell.textContent === "O");

  if (hasShipAtCell(Ship.ships, id)) {
    cell.textContent = "X";
    cell.style.color = "rgba(213, 7, 7, 0.8)";
    cell.style.border = "1px solid rgba(213, 7, 7, 0.8)";
    cell.style.backgroundColor = "rgba(213, 7, 7, 0.19)";

    winCounter = 1;
    lastCellId = id;
    return handleEnemyTurn(); // ✅ hit → go again
  } else {
    cell.textContent = "O";
    playerTurn = true;
    winCounter = 0;
    lastCellId = null;
    return;
  }
};


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