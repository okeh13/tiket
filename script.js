document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    alert(`searching for flights from ${from} to ${to} on ${date}`);
});