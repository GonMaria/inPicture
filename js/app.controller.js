window.initGame = initGame
window.checkAnswer = checkAnswer

let gQuests = []
let gQuestsInitial = [
    // save the list of the questions

    {id: 1, opts:['Alola','Paldea'], correctOptIndex:1 },
    {id: 2, opts:['Hoenn','Sinnoh'], correctOptIndex:0 },
    {id: 3, opts:['Unova','Kanto'], correctOptIndex:0 },
    {id: 4, opts:['Kalos','Galar'], correctOptIndex:1 },
    {id: 5, opts:['Hoenn','Johto'], correctOptIndex:1 },
    {id: 6, opts:['Alola','Unova'], correctOptIndex:0 },
    {id: 7, opts:['Paldea','Sinnoh'], correctOptIndex:1 },
    {id: 8, opts:['Unknown','Lental'], correctOptIndex:0 },
    {id: 9, opts:['Kanto','Galar'], correctOptIndex:0 },
    {id: 10, opts:['Johto','Kalos'], correctOptIndex:1 }
    ] 

var gCurrQuestIdx = 0 // save the current question

function initGame() {
    gQuests = createQuests(); // Initialize and shuffle questions
    gCurrQuestIdx = 0; // Reset the current question index
    renderQuest();// Render the first question
}

function createQuests() {
    // Shuffle the questions to randomize the order
    for (let i = gQuestsInitial.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gQuestsInitial[i], gQuestsInitial[j]] = [gQuestsInitial[j], gQuestsInitial[i]]; 
    }

    return gQuestsInitial.slice(0, 5); // Return 5 questions for the game
}

function renderQuest() {
    const currQuest = gQuests[gCurrQuestIdx]; // Find the current question

    // Update the image src attribute to match the correct path
    const imgElement = document.querySelector('.pokemonImg'); 
    imgElement.src = `img/${currQuest.id}.png`; 

    // Update option buttons
    // const buttons = document.querySelectorAll('.regionSelection');
    // buttons.forEach((button, idx) => {
    //     button.textContent = currQuest.opts[idx];
    //     button.onclick = () => checkAnswer(idx);
    // });

    let srtHtml = ""

    for (let i=0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        srtHtml +=  `<button class="regionSelection" onclick="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button><br>`
    }

    document.querySelector('.btn-container').innerHTML = srtHtml
}


function checkAnswer(optIdx) {
    const currQuest = gQuests[gCurrQuestIdx];
    if (optIdx === currQuest.correctOptIndex) { // Correct answer
        
        if (gCurrQuestIdx < gQuests.length - 1) { // Move to the next question
            
            gCurrQuestIdx++;
            renderQuest();

        } else { // Prompt the user for a new game
            
            const playAgain = confirm('You win! You have correctly identified all the regions. Do you want to play again?');

            if (playAgain) { // User chose to play again
                
                initGame(); // Restart the game

            } else { // User chose not to play again
                
                alert('Thank you for playing! Refresh the page to play again.');
            }
        }

    } else { // Incorrect answer

        alert('Oops! That\'s not right. Try again.'); 

    }
}








