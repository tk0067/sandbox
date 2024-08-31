document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const towers = [[], [], []];
    const numDisks = 3;

    // Initialize the first tower with disks
    for (let i = numDisks; i > 0; i--) {
        towers[0].push(i);
    }

    renderTowers(towers);

    // Create a queue for moves
    const moves = [];
    solveHanoi(numDisks, 0, 2, 1, moves);

    // Execute moves with delay
    executeMoves(moves, towers);
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

function solveHanoi(n, from, to, aux, moves) {
    if (n === 0) return;
    solveHanoi(n - 1, from, aux, to, moves);
    moves.push([from, to]);
    solveHanoi(n - 1, aux, to, from, moves);
}

function executeMoves(moves, towers) {
    if (moves.length === 0) return;

    const [from, to] = moves.shift();
    towers[to].push(towers[from].pop());
    renderTowers(towers);
    logMove(from, to);

    setTimeout(() => {
        executeMoves(moves, towers);
    }, 1000);
}

function logMove(from, to) {
    const logElement = document.getElementById('log');
    if (logElement) {
        const moveMessage = `Moved disk from Tower ${from + 1} to Tower ${to + 1}`;
        const logEntry = document.createElement('div');
        logEntry.textContent = moveMessage;
        logElement.appendChild(logEntry);
        logElement.scrollTop = logElement.scrollHeight; // Auto-scroll to the latest log entry
    } else {
        console.error('Log element not found');
    }
}
