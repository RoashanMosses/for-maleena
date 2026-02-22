document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Send Virtual Hug
    const hugBtn = document.getElementById('send-hug');
    hugBtn.addEventListener('click', () => {
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 100);
        }
        alert('A big hug is coming your way! ❤');
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    // Music Toggle
    const musicBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('romantic-song');
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = 'Pause Our Song 🎵';
            musicBtn.style.background = 'var(--sunset-pink)';
        } else {
            audio.pause();
            musicBtn.textContent = 'Play Our Song 🎵';
            musicBtn.style.background = 'var(--sunset-purple)';
        }
    });

    // Open Letter
    const letterBtn = document.getElementById('open-letter');
    const letterDisplay = document.getElementById('letter-display');
    letterBtn.addEventListener('click', () => {
        letterDisplay.style.display = 'block';
        letterDisplay.scrollIntoView({ behavior: 'smooth' });
        letterBtn.style.display = 'none';
    });

    // Dark Mode
    const darkToggle = document.getElementById('dark-toggle');
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkToggle.textContent = '☀️';
    }

    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
        darkToggle.textContent = isDark ? '☀️' : '🌙';
    });
});
