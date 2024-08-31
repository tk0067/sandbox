document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const towers = [[], [], []];
    const numDisks = 3;

    // Initialize the first tower with disks
    for (let i = numDisks; i > 0; i--) {
        towers[0].push(i);
    }

    renderTowers(towers);

    // Solve the puzzle with delay
    solveHanoiWithDelay(numDisks, 0, 2, 1, towers);
}

function renderTowers(towers) {
    for (let i = 0; i < towers.length; i++) {
        const tower = document.getElementById(`tower${i + 1}`);
        tower.innerHTML = '';
        towers[i].forEach((disk, index) => {
            const diskElement = document.createElement('div');
            diskElement.className = 'disk';
            diskElement.style.width = `${disk * 20}px`;
            diskElement.style.bottom = `${index * 20}px`;
            diskElement.style.left = `calc(50% - ${disk * 10}px)`;
            tower.appendChild(diskElement);
        });
    }
}

function solveHanoiWithDelay(n, from, to, aux, towers) {
    if (n === 0) return;

    setTimeout(() => {
        solveHanoiWithDelay(n - 1, from, aux, to, towers);
        towers[to].push(towers[from].pop());
        renderTowers(towers);
        setTimeout(() => {
            solveHanoiWithDelay(n - 1, aux, to, from, towers);
        }, 1000);
    }, 1000);
}
