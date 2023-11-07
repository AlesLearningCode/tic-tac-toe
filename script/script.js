let gameboard = (function(){
    let gameboard = []
    const board = document.querySelector(`.game`)
    const endScore = document.querySelector(`.endScore`)
    const createBtn = document.querySelector(`.createPlayer`)
    let playerOne
    let playerTwo
    render()
    playerMark()
    function render(){
        for(let i = 0; i < 9; i++){
        divs = document.createElement(`div`)
        divs.classList.add(`square`)
        divs.setAttribute(`number`, `${[i]}`)
        board.appendChild(divs)
        }
    };
    function playerMark(playerOne){
        const squares = document.querySelectorAll(`.square`)
        function createPlayer(name){
            return {name}
        }
        createBtn.addEventListener( `click`, () =>{
            const playerName = document.getElementById(`playerOne`).value
            const playerNameTwo = document.getElementById(`playerTwo`).value
            const playerTextOne = document.querySelector(`.playerOne`)
            const playerTextTwo = document.querySelector(`.playerTwo`)
            playerOne = createPlayer(`${playerName}`)
            playerTwo = createPlayer(`${playerNameTwo}`)
            playerTextOne.textContent = playerOne.name
            playerTextTwo.textContent = playerTwo.name
            console.log(playerOne.name)
            })
        squares.forEach(square => {
            square.addEventListener(`click`, () =>{
                // searches for how many occurences of each sign is in array
                const occurrences = gameboard.reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
                  }, {});
                // input of player marks onto gameboard
                if(gameboard.length === 0){
                gameboard[square.getAttribute(`number`)] = 1
                square.innerHTML = `X`
                }else if((occurrences[1] > occurrences[2] || occurrences[2] == undefined) && 
                square.textContent == ""){
                square.innerHTML = `O`
                gameboard[square.getAttribute(`number`)] = 2
                }else if(occurrences[2] === occurrences[1] && 
                square.textContent == ""){
                square.innerHTML = `X`
                gameboard[square.getAttribute(`number`)] = 1
                }else if(occurrences[1] + occurrences[2] == 9){
                gameboard.splice(0, 9)
                }
                //Checks for logic of the game and decides winner 
                if((gameboard[0] == gameboard[1] && gameboard[2] == gameboard[1] && gameboard[0] != undefined) || 
                (gameboard[3] == gameboard[4] && gameboard[5] == gameboard[4] && gameboard[3] != undefined) || 
                (gameboard[6] == gameboard[7] && gameboard[8] == gameboard[7] && gameboard[6] != undefined)){
                endScore.textContent = `${playerOne.name}wins`
                gameboard.splice(0, 9)
                }else if((gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6] && gameboard[0] != undefined) || 
                (gameboard[1] == gameboard[4]  && gameboard[4] == gameboard[7] && gameboard[1] != undefined) || 
                (gameboard[2] == gameboard[5] && gameboard[5] == gameboard[8] && gameboard[2] != undefined)){
                endScore.textContent = `You win`
                gameboard.splice(0, 9)
                }else if((gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8] && gameboard[0] != undefined) || 
                (gameboard[2] == gameboard[4]  && gameboard[4] == gameboard[6] && gameboard[2] != undefined)){
                endScore.textContent = `You win`
                gameboard.splice(0, 9)
                }else if(occurrences[1] + occurrences[2] == 8){
                endScore.textContent = `It's a draw`
                gameboard.splice(0, 9)
                }
            })
        });
    };
    restartnGame = (function(){
        const restartBtn = document.querySelector(`.restart`)
        restartBtn.addEventListener(`click`, () =>{
            const endScore = document.querySelector(`.endScore`)
            board.innerHTML = ""
            endScore.textContent = ""
            gameboard.splice(0, 9)
            render()
            playerMark()
    });
    })();
})();
