let Gameboard = {
    gameboard: [],
    newArray:[],
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
        const squares = document.querySelectorAll(`.square`)
        squares.forEach(square => {
            square.addEventListener(`click`, () =>{
                // input of squares onto gameboard
                if(this.arrayLastIndex(1) == `O` && this.gameboard.length < 9 && 
                square.textContent == ""){
                this.gameboard.push(`X`)
                this.newArray[square.getAttribute(`number`)] = "X"
                square.innerHTML = this.gameboard[this.gameboard.length - 1]
                }else if(this.arrayLastIndex(1) == `X` && this.gameboard.length < 9 && 
                square.textContent == ""){
                this.gameboard.push(`O`)
                square.innerHTML = this.gameboard[this.gameboard.length - 1]
                this.newArray[square.getAttribute(`number`)] = "O"
                }else if(this.gameboard.length === 9){
                this.gameboard.splice(0, 9)
                this.newArray.splice(0,9)
                board.innerHTML = ""
                this.init()
                }else if(this.gameboard.length === 0){
                this.gameboard.push(`X`)
                square.innerHTML = `X`
                this.newArray[square.getAttribute(`number`)] = "X"
                }
                // Checks for logic of the game and decides winner
                if(){
                    console.log("You won")
                    board.innerHTML = ""
                    this.newArray.splice(0,9)
                    this.gameboard.splice(0, 9)
                    this.init()
                }
                console.log(this.newArray)
            })
        });
    },
    arrayLastIndex: function(value){
        return this.gameboard[this.gameboard.length - value]
    },
}
Gameboard.init()
