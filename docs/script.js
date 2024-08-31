// 円盤の要素を作成する関数
function createDisc(size) {
    const disc = document.createElement('div');
    disc.classList.add('disc');
    disc.style.width = size * 20 + 'px';
    disc.style.height = size * 10 + 'px';
    disc.style.backgroundColor = 'gray';
    return disc;
  }
  
  // ハノイの塔のアルゴリズムを実装（再帰関数）
  function hanoi(n, fromRod, toRod, auxRod) {
    // ... (アルゴリズムのロジック)
  }
  
  // 初期化処理
  function initialize(numDiscs) {
    // ... (初期状態の設定)
  }
  
  // イベントリスナーの設定
  // ... (ユーザーの操作に対応)
  
  // 初期化
  initialize(3); // 例として3枚の円盤
  