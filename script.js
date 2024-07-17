document.addEventListener('DOMContentLoaded', () => {
    const momoButton = document.getElementById('momoButton');
    const wishesButton = document.getElementById('wishesButton');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');
    const confettiContainer = document.getElementById('confetti-container');

    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);
    }

    momoButton.addEventListener('click', () => {
        const x = Math.random() * (window.innerWidth - momoButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - momoButton.offsetHeight);
        momoButton.style.position = 'absolute';
        momoButton.style.left = `${x}px`;
        momoButton.style.top = `${y}px`;
    });

    wishesButton.addEventListener('click', () => {
        container.classList.add('hidden');
        message.classList.remove('hidden');
        message.style.display = 'block';
        setTimeout(() => {
            const messageContent = document.querySelector('.message-content');
            messageContent.style.opacity = '1';
        }, 500);
    });

    function getRandomColor() {
        const colors = ['#FF69B4', '#FFD700', '#FF4500', '#1E90FF', '#32CD32'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
