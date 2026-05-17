//　#pick-up, #songs, #news を捕まえる。
const target = document.querySelectorAll('#profile, #detail, #pick-up, #songs, #news');

// 「画面に入ったらクラスをつける」
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        } else {
            entry.target.classList.remove('is-active');
        }
    });
}, {
    threshold: .2 // 要素が20％ほど見えたら発火させる
});

// ターゲット一つ一つに見張ると命令する。
target.forEach(t => {
    observer.observe(t);
});