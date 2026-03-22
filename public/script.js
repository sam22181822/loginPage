const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    const message = document.getElementById('message');
    message.textContent = data.message;

    if (data.success) {
        message.style.color = "green";
    } else {
        message.style.color = "red";
    }
});