const amountEl = document.querySelector("#amount");
const yearsEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const payment1El = document.querySelector("#payment1");
const payment2El = document.querySelector("#payment2");
const feeEl = document.querySelector("#fee");
const calcEl = document.querySelector("#calc");


console.log(amountEl, yearsEl, rateEl, payment1El, payment2El, feeEl)


calcEl.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountEl.value * 10000;
    let years = yearsEl.value;
    let rate = rateEl.value / 100
    // let fee = 0;
    // if (feeEl.checked) {
    //     fee = 5000;
    // }
    let fee = feeEl.checked ? 5000 : 0;
    let rule = payment1El.checked ? 1 : 2;

    let totalInterest = amount * rate * years;
    let totalAmount = amount + totalInterest + fee;

    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest;
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "block";
    }, 500)

    console.log(amount, years, rate, fee, rule, totalAmount, totalInterest);
}


