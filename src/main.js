import { diffDates, diffToHtml } from "./datecalc/datecalc";
import { formatError } from "./datecalc/utils";
import "./timer";
import "../howler/dist/howler"

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const checkbox = document.querySelector(".input-checkbox");
const text = document.querySelector(".text");
const timer = document.getElementById("timerform");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        dateCalcForm.classList.add("hidden");
        timer.classList.remove("hidden");
        text.textContent = "Переключиться на калькулятор дат";
    } else {
        timer.classList.add("hidden");
        dateCalcForm.classList.remove("hidden");
        text.textContent = "Переключиться на таймер";
    }
});