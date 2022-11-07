let headerText = `
    <header class="header">
        <p class="text">Наши калькуляторы</p>
        <div class="links_box">
            <a class='link' href="index.html">Главная</a>
            <a class='link' href="datecalc.html">Калькулятор дат</a>
            <a class='link' href="timer.html">Таймер</a>
        </div>
    </header> 
`;

function setHeader() {
  let header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();