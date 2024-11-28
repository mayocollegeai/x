document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageDiv = document.getElementById('message');
    messageDiv.innerText = `Successfully logged in as ${username}!`;
    messageDiv.style.color = 'green';
});
