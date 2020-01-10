const GAMECHOICES = ['rock', 'paper', 'scissors']
let computerChoice = '';
let playerChoice = '';

let wins = 0;
let losses = 0; 
let draws = 0;
let games = 0;
const container = document.querySelector('#container');
const answerDiv = document.createElement('div');
answerDiv.id = 'answer-list';
container.appendChild(answerDiv);

function createSelectionList() {
    container.removeChild(btn);
    const selectionList = document.createElement('div');
    selectionList.id = 'selection-list';

    const selectionListTitle = document.createElement('h2');
    selectionListTitle.id = 'SelectionListTitle';
    selectionListTitle.innerHTML = 'Select one of these: ';


    const rock = document.createElement('img');
    rock.src = `https://img.icons8.com/offices/30/000000/rock.png`;
    rock.id = 'rockImage';
    rock.alt = 'ROCK';
    rock.onclick = function(selection) {selection = 'rock';playerChoice = selection; computerSelect(GAMECHOICES);};

    const paper = document.createElement('img');
    paper.src = `https://img.icons8.com/officel/16/000000/paper.png`;
    paper.id = 'paperImage';
    paper.alt = 'PAPER';
    paper.onclick = function(selection) {selection = 'paper';playerChoice = selection; computerSelect(GAMECHOICES);};

    const scissors = document.createElement('img');
    scissors.src = `https://img.icons8.com/officel/16/000000/scissors.png`;
    scissors.id = 'scissorsImage';
    scissors.alt = 'SCISSORS';
    scissors.onclick = function(selection) {selection = 'scissors';playerChoice = selection; computerSelect(GAMECHOICES);};
    
    container.appendChild(selectionList);
    selectionList.appendChild(selectionListTitle);
    selectionList.appendChild(rock);
    selectionList.appendChild(paper);
    selectionList.appendChild(scissors);    
}

function createResultList(winCounts, lossCounts) {
    let gameCount = 5; 
    
    if (winCounts === gameCount){
        const newGameLabel = document.getElementById('selection-list');
        newGameLabel.innerHTML = `<h2>Score Limit Reached, click below to play again</h2>`;
        newGameLabel.appendChild(replayBtn);
        const resultList = document.createElement('div');
        resultList.classList = 'resultList';
        resultList.innerHTML = `After ${games} games you won ${wins} games and lost ${losses} games. ${draws} games were draws.`;
        answerDiv.appendChild(resultList);
        
        return;
        
    } else if (lossCounts === gameCount) {
        const newGameLabel = document.getElementById('selection-list');
        newGameLabel.innerHTML = `<h2>Score Limit Reached, click below to play again</h2>`;
        newGameLabel.appendChild(replayBtn);
        const resultList = document.createElement('div');
        resultList.classList = 'resultList';
        resultList.innerHTML = `After ${games} games you won ${wins} games and lost ${losses} games. ${draws} games were draws.`;
        answerDiv.appendChild(resultList);
        return;
    } else {return;}
}

function chooseWinner(user, computer){
    
    if (user == computer) {
        draws++;
        games++;
        return `Draw`;
    } else if (user == 'rock' && computer == 'scissors'){
        wins++;
        games++;
        return 'You Win';
    } else if (user == 'paper' && computer == 'rock') {
        wins++;
        games++;
        return 'You Win';
    } else if (user == 'scissors' && computer == 'paper') {
        wins++;
        games++;
        return 'You Win';
    } else {
        losses++;
        games++;
        return 'You Lost';
    }

    
}

function userSelect() {
    
    let selection = 'no selection made';
    createSelectionList(selection);  
    

}

function computerSelect(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length); 
    computerChoice = GAMECHOICES[randomIndex];

    const resultBox = document.createElement('div');
    resultBox.classList = 'resultBox';
    container.appendChild(resultBox);

    const playerMsg = document.createElement('p');
    playerMsg.innerHTML = `You chose: ${playerChoice}`;
    resultBox.appendChild(playerMsg);

    const computerMsg =  document.createElement('p');
    computerMsg.innerHTML = `Opponent chose: ${computerChoice}`;
    resultBox.appendChild(computerMsg);

    let winnerMsg = document.createElement('p');
    winnerMsg.innerHTML = `Result: ${chooseWinner(playerChoice,computerChoice)}`;
    resultBox.appendChild(winnerMsg);

    createResultList(wins, losses);
    
}

function refreshPage() {
    window.location.reload();
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', userSelect);

const replayBtn = document.createElement('button');
replayBtn.innerHTML = 'Click Here';
replayBtn.addEventListener('click', refreshPage);

