const form = document.getElementById('form');

function submitMessage() {
    let message = document.getElementById('message');
    let messageContent = document.getElementById('messageContent');

    if (message.value === '') {
        // Alert if there isn't any message.
        alert('You can\'t send nothing you dummy..');
    } else {
        // Gets the input message and puts it in the messageContent div.
        messageContent.textContent = message.value;

        // Resets the message value.
        message.value = '';
    }
}

// Onclick "Enter" send the message.
form.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('submit').click();
    }
});