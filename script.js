document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope-screen");
    const mainContent = document.getElementById("main-content");

    // Проверяем, нашли ли мы элементы на странице
    if (envelope && mainContent) {
        envelope.style.cursor = 'pointer'; // Делаем курсор-ручку на весь экран
        
        envelope.addEventListener("click", function() {
            // Плавно скрываем конверт
            envelope.style.transition = "opacity 0.6s ease";
            envelope.style.opacity = '0';
            
            // Ждем полсекунды и показываем сайт
            setTimeout(() => {
                envelope.style.display = 'none'; 
                mainContent.style.display = 'block'; 
                document.body.style.overflow = 'auto'; 
            }, 600); 
        });
    } else {
        console.log("Ошибка: скрипт не нашел блоки на странице.");
    }
});
// Красивое всплывающее окно после отправки формы
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.rsvp-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Мы не отменяем отправку, а просто ждем ее
            setTimeout(() => {
                alert('Спасибо! Ваш ответ успешно отправлен.');
            }, 100);
        });
    }
});
// Логика таймера обратного отсчета
document.addEventListener("DOMContentLoaded", function() {
    // Указываем дату свадьбы: 17 июля 2027 года, 15:00 (замените 15 на нужный час)
    const weddingDate = new Date("July 17, 2027 15:00:00").getTime();

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Если время вышло
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown").innerHTML = "<p>Свадьба состоялась!</p>";
            return;
        }

        // Вычисляем дни, часы, минуты и секунды
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Выводим на экран (добавляем ноль впереди, если число меньше 10)
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
});