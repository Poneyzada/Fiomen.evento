// Lógica do Cronômetro (Countdown)
const countdown = () => {
    // Define a data limite: Dia 26/04/2026 às 23:59:59
    // Se o ano mudar, adapte o ano na string. Vamos assumir o ano atual ou 2026 como base na instrução.
    const countDate = new Date("April 26, 2026 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Constantes de tempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Cálculo
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Atualização do DOM, com zeros à esquerda
    document.getElementById("days").innerText = textDay < 10 && textDay >= 0 ? "0" + textDay : textDay;
    document.getElementById("hours").innerText = textHour < 10 && textHour >= 0 ? "0" + textHour : textHour;
    document.getElementById("minutes").innerText = textMinute < 10 && textMinute >= 0 ? "0" + textMinute : textMinute;
    document.getElementById("seconds").innerText = textSecond < 10 && textSecond >= 0 ? "0" + textSecond : textSecond;

    // Caso o tempo acabe
    if (gap < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.querySelector(".timer-title").innerText = "A OFERTA FOI ENCERRADA";
    }
};

// Roda a cada 1 segundo
setInterval(countdown, 1000);
countdown();

// Animações sutis no scroll usando IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
});

const cards = document.querySelectorAll('.glass-card');
cards.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(el);
});
