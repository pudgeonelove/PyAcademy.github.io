const titles = [
    "Урок 1: Конфигурация", "Урок 2: Вычисления", "Урок 3: Логика",
    "Урок 4: Списки", "Урок 5: Циклы", "Урок 6: Функции",
    "Урок 7: Словари", "Урок 8: Ошибки"
];
let finished = new Set();

function jump(n) {
    // Убираем активный класс у всех страниц и кнопок
    document.querySelectorAll('.lesson-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    
    // Активируем нужную страницу
    const targetPage = document.getElementById('p' + n);
    const targetNav = document.getElementById('ni-' + n);
    
    if (targetPage && targetNav) {
        targetPage.classList.add('active');
        targetNav.classList.add('active');
        document.getElementById('lesson-title').innerText = titles[n-1];
        document.getElementById('main-scroll').scrollTop = 0;
    }
}

function run(id, btn) {
    btn.innerText = '⚙ ЗАПУСК...';
    btn.disabled = true;
    setTimeout(() => {
        document.getElementById('out' + id).style.display = 'block';
        btn.innerText = 'ГОТОВО';
    }, 600);
}

function done(curr, next) {
    finished.add(curr);
    document.getElementById('ni-' + curr).classList.add('done');
    
    // Прогресс
    let p = Math.round((finished.size / 8) * 100);
    document.getElementById('p-val').innerText = p + '%';
    document.getElementById('p-fill').style.width = p + '%';

    if (next === 'end') {
        document.getElementById('modal').style.display = 'flex';
    } else {
        jump(next);
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
                                }
