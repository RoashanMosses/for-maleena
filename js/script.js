document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
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

    // Send Virtual Hug - Minimalist Floating Hearts
    const hugBtn = document.getElementById('send-hug');
    hugBtn.addEventListener('click', () => {
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 150);
        }
        hugBtn.style.boxShadow = '0 0 20px rgba(197, 160, 89, 0.4)';
        setTimeout(() => { hugBtn.style.boxShadow = 'none'; }, 1000);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = (Math.random() * 80 + 10) + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
        heart.style.color = '#c98a7d';
        heart.style.opacity = '0.5';
        heart.style.zIndex = '3000';
        heart.style.transition = 'all 4s linear';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(-110vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Music Toggle
    const musicBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('romantic-song');
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = 'Pause Our Song 🎵';
            musicBtn.style.background = 'var(--rose)';
            musicBtn.style.color = 'white';
        } else {
            audio.pause();
            musicBtn.textContent = 'Play Our Song 🎵';
            musicBtn.style.background = 'transparent';
            musicBtn.style.color = 'var(--text-main)';
        }
    });

    // Open Letter Slide Down
    const letterBtn = document.getElementById('open-letter');
    const letterDisplay = document.getElementById('letter-display');
    letterBtn.addEventListener('click', () => {
        letterDisplay.style.display = 'block';
        setTimeout(() => {
            letterDisplay.style.opacity = '1';
            letterDisplay.style.transform = 'translateY(0)';
        }, 50);
        letterBtn.style.display = 'none';
    });

    // Dark Mode Toggle
    const darkToggle = document.getElementById('dark-toggle');
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkToggle.textContent = '☀️';
    }

    darkToggle.addEventListener('click', () => {
        document.body.classList.add('transition-theme');
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
        darkToggle.textContent = isDark ? '☀️' : '🌙';
    });
});
