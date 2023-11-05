let Gameboard = {
    gameboard: [],
    counts:{},
    init: function(){  
        this.render()
        this.playerMark()
    },
    render: function (){
        const board = document.querySelector(`.game`)
        for(let i = 0; i < 9; i++){
            divs = document.createElement(`div`)
            divs.classList.add(`square`)
            divs.setAttribute(`number`, `${[i]}`)
            board.appendChild(divs)
        }
    },
    playerMark: function(){
        const board = document.querySelector(`.game`)
        const endScore = document.querySelector(`.endScore`)
        const squares = document.querySelectorAll(`.square`)
        squares.forEach(square => {
            square.addEventListener(`click`, () =>{
                // searches for how many occurences of each sign is in array
                const occurrences = this.gameboard.reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
                  }, {});
                // input of player marks onto gameboard
                if(this.gameboard.length === 0){
                endScore.textContent = " "
                this.gameboard[square.getAttribute(`number`)] = 1
                square.innerHTML = `X`
                }else if((occurrences[1] > occurrences[2] || occurrences[2] == undefined) && 
                square.textContent == ""){
                square.innerHTML = `O`
                this.gameboard[square.getAttribute(`number`)] = 2
                }else if(occurrences[2] === occurrences[1] && 
                square.textContent == ""){
                square.innerHTML = `X`
                this.gameboard[square.getAttribute(`number`)] = 1
                }else if(occurrences[1] + occurrences[2] == 9){
                this.gameboard.splice(0, 9)
                board.innerHTML = ""
                this.init()
                }
                //Checks for logic of the game and decides winner 
                if((this.gameboard[0] == 1 && this.gameboard[1] == 1 && this.gameboard[2] == 1) || 
                (this.gameboard[0] == 2 && this.gameboard[1] == 2 && this.gameboard[2] == 2) ||
                (this.gameboard[3] == 1 && this.gameboard[4] == 1 && this.gameboard[5] == 1) || 
                (this.gameboard[3] == 2 && this.gameboard[4] == 2 && this.gameboard[5] == 2) ||
                (this.gameboard[6] == 1 && this.gameboard[7] == 1 && this.gameboard[8] == 1) || 
                (this.gameboard[6] == 2 && this.gameboard[7] == 2 && this.gameboard[8] == 2)){
                endScore.textContent = `You win`
                this.gameboard.splice(0, 9)
                board.innerHTML = ""
                this.init()
                }else if((this.gameboard[0] == 1 && this.gameboard[3] == 1 && this.gameboard[6] == 1) || 
                (this.gameboard[0] == 2 && this.gameboard[3] == 2 && this.gameboard[6] == 2) ||
                (this.gameboard[1] == 1 && this.gameboard[4] == 1 && this.gameboard[7] == 1) || 
                (this.gameboard[1] == 2 && this.gameboard[4] == 2 && this.gameboard[7] == 2) ||
                (this.gameboard[2] == 1 && this.gameboard[5] == 1 && this.gameboard[8] == 1) || 
                (this.gameboard[2] == 2 && this.gameboard[5] == 2 && this.gameboard[8] == 2)){
                endScore.textContent = `You win`
                this.gameboard.splice(0, 9)
                board.innerHTML = ""
                this.init()
                }else if((this.gameboard[0] == 1 && this.gameboard[4] == 1 && this.gameboard[8] == 1) || 
                (this.gameboard[0] == 2 && this.gameboard[4] == 2 && this.gameboard[8] == 2) ||
                (this.gameboard[2] == 1 && this.gameboard[4] == 1 && this.gameboard[6] == 1) || 
                (this.gameboard[2] == 2 && this.gameboard[4] == 2 && this.gameboard[6] == 2)){
                endScore.textContent = `You win`
                this.gameboard.splice(0, 9)
                board.innerHTML = ""
                this.init()
                }else if(occurrences[1] + occurrences[2] == 8){
                endScore.textContent = `It's a draw`
                this.gameboard.splice(0, 9)
                board.innerHTML = ""
                this.init()
                }
            })
        });
    },
    arrayLastIndex: function(value){
        return this.gameboard[this.gameboard.length - value]
    },
}
Gameboard.init()