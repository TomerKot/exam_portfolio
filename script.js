// Чекаємо, поки весь HTML-документ завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // Знаходимо всі посилання в навігації та всі секції-сторінки
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Додаємо обробник кліку до КОЖНОГО посилання в навігації
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Забороняємо стандартну поведінку посилання (перезавантаження сторінки)
            e.preventDefault();

            // Отримуємо ID цільової сторінки (наприклад, "#resume")
            const targetId = link.getAttribute('href');

            // 1. Ховаємо всі сторінки
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // 2. Знімаємо клас 'active' з усіх посилань
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // 3. Показуємо потрібну сторінку
            const targetPage = document.querySelector(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // 4. Додаємо клас 'active' до натиснутого посилання
            link.classList.add('active');
        });
    });
});