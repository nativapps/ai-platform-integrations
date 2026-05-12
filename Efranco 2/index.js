const overlay = document.getElementById('embed-overlay');
const container = document.getElementById('embed-container');
const bubble = document.getElementById('welcome-bubble');

function openChat() {
    container.classList.add('active');
    overlay.classList.add('active');
    bubble.classList.add('hidden');
}

function closeChat() {
    container.classList.remove('active');
    overlay.classList.remove('active');
    bubble.classList.remove('hidden');
}

function toggleChat() {
    if (container.classList.contains('active')) {
        closeChat();
    } else {
        openChat();
    }
}

bubble.addEventListener('click', toggleChat);
overlay.addEventListener('click', closeChat);

