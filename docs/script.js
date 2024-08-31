// 円盤の要素を作成する関数
function createDisc(size) {
    const disc = document.createElement('div');
    disc.classList.add('disc');
    disc.style.width = size * 20 + 'px';
    disc.style.height = size * 10 + 'px';
    return disc;
  }
  
  // ハノイの塔のアルゴリズム（再帰関数）
  function hanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      moveDisc(fromRod, toRod);
    } else {
      hanoi(n - 1, fromRod, auxRod, toRod);
      moveDisc(fromRod, toRod);
      hanoi(n - 1, auxRod, toRod, fromRod);
    }
  }
  
  // 円盤を移動する関数
  function moveDisc(fromRodId, toRodId) {
    const fromRod = document.getElementById(fromRodId);
    const toRod = document.getElementById(toRodId);
    const disc = fromRod.lastChild;
    toRod.appendChild(disc);
  }
  
  // 初期化処理
  function initialize(numDiscs) {
    const rod1 = document.getElementById('rod1');
    for (let i = numDiscs; i > 0; i--) {
      const disc = createDisc(i);
      rod1.appendChild(disc);
    }
  }
  
  // イベントリスナーの設定
  const rods = document.querySelectorAll('.rod');
  rods.forEach(rod => {
    rod.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    rod.addEventListener('drop', (event) => {
      const discId = event.dataTransfer.getData('text/plain');
      const disc = document.getElementById(discId);
      const targetRod = event.target;
      // 移動先の棒の一番上の円盤を取得 (省略)
      // 移動可能か判定
      if (/* 移動可能であれば */) {
        moveDisc(disc.parentNode.id, targetRod.id);
      }
    });
  });
  
  // ドラッグ開始時のイベントリスナー
  document.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });
  
  // 初期化
  initialize(3); // 例として3枚の円盤