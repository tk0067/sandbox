document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const towers = [[], [], []];
    const numDisks = 3;

    // Initialize the first tower with disks
    for (let i = numDisks; i > 0; i--) {
        towers[0].push(i);
    }

    renderTowers(towers);

    // Solve the puzzle
    solveHanoi(numDisks, 0, 2, 1, towers);
}

function renderTowers(towers) {
    for (let i = 0; i < towers.length; i++) {
        const tower = document.getElementById(`tower${i + 1}`);
        tower.innerHTML = '';
        towers[i].forEach(disk => {
            const diskElement = document.createElement('div');
            diskElement.className = 'disk';
            diskElement.style.width = `${disk * 20}px`;
            tower.appendChild(diskElement);
        });
    }
}

function solveHanoi(n, from, to, aux, towers) {
    if (n === 0) return;

    solveHanoi(n - 1, from, aux, to, towers);
    towers[to].push(towers[from].pop());
    renderTowers(towers);
    solveHanoi(n - 1, aux, to, from, towers);
}
