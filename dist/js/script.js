const hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.menu__overlay'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});


const procent = document.querySelectorAll('.skills__progress__item-procent'),
    lines = document.querySelectorAll('.skills__progress__item-rectangle .sub');

procent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



// Отправка данных на сервер
function send(event, php) {
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response);
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Ваше сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else { alert("Ошибка сервера. Номер: " + req.status); }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() { alert("Ошибка отправки запроса"); };
    req.send(new FormData(event.target));
}