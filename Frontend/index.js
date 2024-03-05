const input = document.getElementById('input');
const button = document.querySelector('.button');

const form = document.getElementById('data-form');

    form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/api/data', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email }),
    })
        .then((response) => response.json())
        .then((data) => {
        console.log('Received response:', data);
        alert('Data sent successfully');
    })
        .catch((error) => {
        console.error('Error:', error);
        alert('Error sending data');
    });
});
