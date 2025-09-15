const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const rollDiceBtn = document.getElementById("roll-dice");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

let counts = new Array(13).fill(0);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceDisplay(die, value) {
    die.textContent = value;
}

function rollAnimation() {
    dice1.textContent = rollDice();
    dice2.textContent = rollDice();
}

rollDiceBtn.addEventListener("click", () => {
    let sum;
    let num1;
    let num2;
    let foundResult = false;

    const roll = () => {
        num1 = rollDice();
        num2 = rollDice();
        sum = num1 + num2;
        counts[sum]++;

        if (counts[sum] === 10) {
            foundResult = true;
            updateDiceDisplay(dice1, num1);
            updateDiceDisplay(dice2, num2);
            result.textContent = `Result: ${sum}`;
            counts[sum] = 0;
        } else {
            setTimeout(roll, 100);
        }
    };

    const animate = () => {
        if (!foundResult) {
            rollAnimation();
            requestAnimationFrame(animate);
        }
    };

    animate();
    roll();
});

resetBtn.addEventListener("click", () => {
    for (let i = 2; i <= 12; i++) {
        counts[i] = 0;
    }
    result.textContent = "Result: -";
});
