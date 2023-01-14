let i = 0;

const move = () => {
    for (let j = 0; j <= 6; j++) {
        const target = document.querySelector(`#i${j % 6}`);
        target.classList.remove('i' + ((i % 6) + 1));
        target.classList.add('i' + ((++i % 6) + 1));
    }
};
move();

setInterval(move, 1000);
