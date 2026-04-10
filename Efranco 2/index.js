const overlay = document.getElementById('embed-overlay');
const container = document.getElementById('embed-container');
const button = document.getElementById('embed-toggle-button');

function openChat() {
    container.classList.add('active');
    overlay.classList.add('active');
    button.classList.add('open');
    button.setAttribute('aria-label', 'Cerrar chat');
}

function closeChat() {
    container.classList.remove('active');
    overlay.classList.remove('active');
    button.classList.remove('open');
    button.setAttribute('aria-label', 'Abrir chat');
}

function toggleChat() {
    if (container.classList.contains('active')) {
        closeChat();
    } else {
        openChat();
    }
}

button.addEventListener('click', toggleChat);
overlay.addEventListener('click', closeChat);
