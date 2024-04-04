// 1. Deposit some money 
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}



const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again")
        }
        else{
            return numberDepositAmount;
        }
    }
}



const getNumberOfLines = () => {
    while(true){
        const numberoflines = prompt("Enter the number of lines you woule like to select: ");
        const lineconvert = parseFloat(numberoflines);
        if(isNaN(lineconvert) || lineconvert <= 0 || lineconvert > 3) {
            console.log("Invalid number of lines, try again. ")
            }
            else{
                return lineconvert;
            }
        }
}

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the total bet per line: ");
        const betamount = parseFloat(bet);
        if(isNaN(betamount) || betamount <= 0 || betamount > balance / lines) {
            console.log("Invalid bet, try again")
            }
            else {
                return betamount;
            }
        }
}

const spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol, count);
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random())
            const selectedSymbol = reelSymbols[]
        }
    }
}




spin();
let balance = deposit();
const lines = getNumberOfLines();
const bet = getBet(balance, lines);