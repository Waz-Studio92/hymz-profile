const target = document.querySelectorAll('#profile, #detail, #pick-up, #songs, #news');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        } else {
            entry.target.classList.remove('is-active');
        }
    });
}, {
    threshold: .2
});

target.forEach(t => {
    observer.observe(t);
});