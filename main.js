// const audio = new Audio('Alexander_Ehlers_-_Warped.ogg');
// audio.play();
const divGame = document.querySelector(".divGame")
const init = function () {
    // music.play();
    const easyColors = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9"];
    const hardColors = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

    divGame.style.display = "flex"
    let option = this.className;
    if (option === 'easy') {
        document.querySelector('.choose').style.display = "none";
        for (let i = 0; i < easyColors.length; i++) {
            const createCards = document.createElement("div");
            createCards.className = "color hiddenCard colorEasy";
            divGame.appendChild(createCards);
        }
        let cards = document.querySelectorAll("div.color")
        cards = [...cards]
        cards.forEach(function (card) {
            const position = Math.floor(Math.random() * easyColors.length)
            card.classList.add(easyColors[position])
            card.style.backgroundColor = 'white';
            card.style.backgroundImage = 'url(images/' + easyColors[position] + '.png';
            card.style.backgroundSize = '100% 100%';
            easyColors.splice(position, 1)
        })
        cards.forEach(function (card) {
            card.addEventListener("click", clickCard)
        })
    } else {
        document.querySelector('.choose').style.display = "none";
        for (let i = 0; i < hardColors.length; i++) {
            const createCards = document.createElement("div");
            createCards.className = "color hard hiddenCard colorHard";
            divGame.appendChild(createCards);
        }
        let cards = document.querySelectorAll("div.color")
        cards = [...cards]
        cards.forEach(function (card) {
            const position = Math.floor(Math.random() * hardColors.length)
            card.classList.add(hardColors[position]);
            card.style.backgroundColor = 'white';
            card.style.backgroundImage = 'url(images/' + hardColors[position] + '.png';
            card.style.backgroundSize = '100% 100%';
            hardColors.splice(position, 1)
        })
        cards.forEach(function (card) {
            card.addEventListener("click", clickCard)
        })
    }
}
// const arrayChoose = [document.querySelector("button.easy"), document.querySelector("button.hard")]
const arrayChoose = [document.querySelector("button.easy")]
arrayChoose.forEach(item => {
    item.addEventListener("click", init)
})
const arrayChooseHard = [document.querySelector("button.hard")]
arrayChooseHard.forEach(item => {
    item.addEventListener("click", init)
})

let clickOne = 0;
let clickOneValue;
let clickTwo = 0;
let clickTwoValue;
let win = 0;
let howMany = 0;
const sound = document.querySelector("#mySound");
const soundWin = document.querySelector("#mySound2");

function clickCard() {

    let cards = document.querySelectorAll("div.color")
    cards = [...cards];
    if (clickOne === 0 && this.classList.contains("hiddenCard")) {
        clickOneValue = this;
        clickOne++;

        sound.play();
        clickOneValue.classList.remove("hiddenCard")
    } else if (clickOne != 0 && clickTwo === 0 && this.classList.contains("hiddenCard")) {
        clickTwoValue = this;
        clickTwo++;
        howMany++;
        clickTwoValue.classList.remove("hiddenCard")
        if (clickOneValue.className == clickTwoValue.className) {
            win += 2;
            soundWin.play();
            clickOneValue.classList.add("shake");
            clickTwoValue.classList.add("shake");
            clickOne = 0;
            clickTwo = 0;
            if (win === cards.length) {
                divGame.classList.add("shake");
                setTimeout(() => {
                    document.querySelectorAll("div.color").forEach(item => {
                        item.style.display = "none"
                    })
                    divGame.classList.add("gameOver")
                }, 1000)
                setTimeout(() => {
                    alert("BRAWO! Potrzebowałeś: " + howMany + " prób.")
                    location.reload(true);
                }, 3000)


            }
        } else {
            sound.play();
            setTimeout(function () {
                clickOneValue.classList.add("hiddenCard")
                clickTwoValue.classList.add("hiddenCard")
                clickOne = 0;
                clickTwo = 0;
            }, 1000)
        }
    }


}
const hiddenCards = document.getElementById("hiddenCards");
for (i = 0; i < 21; i++) {
    var x = document.createElement("IMG");
    x.setAttribute("src", 'images/' + i + '.png');
    x.style.display = "none";
    document.body.appendChild(x);
}
//test