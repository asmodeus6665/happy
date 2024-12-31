const snow = document.querySelector('.snow');

function createSnowflake() {
    const snowflake = document.createElement('div');
    const size = Math.random() * 10 + 5;
    snowflake.classList.add('snowflake');
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';

    snow.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSnowflake();
    });
}

for (let i = 0; i < 100; i++) {
    createSnowflake();
}
