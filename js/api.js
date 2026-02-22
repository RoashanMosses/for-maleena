const BASE_URL = 'http://localhost:5000/api';

const api = {
    async register(name, email, password) {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        return res.json();
    },

    async login(email, password) {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return res.json();
    },

    getToken() {
        return localStorage.getItem('token');
    },

    setToken(token) {
        localStorage.setItem('token', token);
    },

    clearToken() {
        localStorage.removeItem('token');
    },

    getHeaders() {
        return {
            'Authorization': `Bearer ${this.getToken()}`,
            'Content-Type': 'application/json'
        };
    },

    async getProfile() {
        const res = await fetch(`${BASE_URL}/users/profile`, { headers: this.getHeaders() });
        return res.json();
    },

    async updateProfile(data) {
        const res = await fetch(`${BASE_URL}/users/profile`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return res.json();
    },

    async getBothUsers() {
        const res = await fetch(`${BASE_URL}/users/both`, { headers: this.getHeaders() });
        return res.json();
    },

    async getMemories() {
        const res = await fetch(`${BASE_URL}/memories`, { headers: this.getHeaders() });
        return res.json();
    },

    async addMemory(content) {
        const res = await fetch(`${BASE_URL}/memories`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ content })
        });
        return res.json();
    },

    async getRandomMemory() {
        const res = await fetch(`${BASE_URL}/memories/random`, { headers: this.getHeaders() });
        return res.json();
    },

    async getTimeline() {
        const res = await fetch(`${BASE_URL}/timeline`, { headers: this.getHeaders() });
        return res.json();
    },

    async addMilestone(formData) {
        const res = await fetch(`${BASE_URL}/timeline`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${this.getToken()}` },
            body: formData
        });
        return res.json();
    },

    async deleteMilestone(id) {
        const res = await fetch(`${BASE_URL}/timeline/${id}`, {
            method: 'DELETE',
            headers: this.getHeaders()
        });
        return res.json();
    },

    async getGallery(year = '') {
        const res = await fetch(`${BASE_URL}/gallery?year=${year}`, { headers: this.getHeaders() });
        return res.json();
    },

    async uploadPhoto(formData) {
        const res = await fetch(`${BASE_URL}/gallery`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${this.getToken()}` },
            body: formData
        });
        return res.json();
    },

    async getLetters() {
        const res = await fetch(`${BASE_URL}/letters`, { headers: this.getHeaders() });
        return res.json();
    },

    async getLetter(id) {
        const res = await fetch(`${BASE_URL}/letters/${id}`, { headers: this.getHeaders() });
        return res.json();
    },

    async saveLetter(title, content) {
        const res = await fetch(`${BASE_URL}/letters`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ title, content })
        });
        return res.json();
    },

    async getGoals() {
        const res = await fetch(`${BASE_URL}/goals`, { headers: this.getHeaders() });
        return res.json();
    },

    async addGoal(title, targetDate, progress) {
        const res = await fetch(`${BASE_URL}/goals`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ title, targetDate, progress })
        });
        return res.json();
    },

    async updateGoal(id, data) {
        const res = await fetch(`${BASE_URL}/goals/${id}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return res.json();
    },

    async deleteGoal(id) {
        const res = await fetch(`${BASE_URL}/goals/${id}`, {
            method: 'DELETE',
            headers: this.getHeaders()
        });
        return res.json();
    },

    async getVisionBoard() {
        const res = await fetch(`${BASE_URL}/visionboard`, { headers: this.getHeaders() });
        return res.json();
    },

    async addVisionItem(formData) {
        const res = await fetch(`${BASE_URL}/visionboard`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${this.getToken()}` },
            body: formData
        });
        return res.json();
    },

    async deleteVisionItem(id) {
        const res = await fetch(`${BASE_URL}/visionboard/${id}`, {
            method: 'DELETE',
            headers: this.getHeaders()
        });
        return res.json();
    },

    showHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0';
        heart.style.fontSize = '2rem';
        heart.style.color = '#f7cbd1';
        heart.style.zIndex = '3000';
        heart.style.transition = 'all 2s ease-out';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = 'translateY(-100vh) rotate(360deg)';
            heart.style.opacity = '0';
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
};
