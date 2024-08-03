document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('main').forEach(main => {
        main.style.display = 'none';
    });
    const main1 = document.getElementById('main-1');
    main1.style.display = 'block';
    main1.style.opacity = '1';
});

function showMain(number) {
    const mains = document.querySelectorAll('main');
    mains.forEach(main => {
        main.classList.remove('show');
        main.style.opacity = 0;
        setTimeout(() => {
            main.style.display = 'none';
        }, 500);
    });

    const target = document.getElementById('main-' + number);
    setTimeout(() => {
        target.style.display = 'block';
        setTimeout(() => {
            target.style.opacity = 1;
            target.classList.add('show');
        }, 10);
    }, 500);
}
