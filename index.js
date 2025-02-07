document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden'); // Toggle visibility of the surprise message
    surpriseMessage.classList.toggle('fade-in'); // Add fade-in effect
});

// Add fade-in effect
const style = document.createElement('style');
style.innerHTML = `
    #surpriseMessage {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    #surpriseMessage:not(.hidden) {
        opacity: 1;
    }
`;
document.head.appendChild(style);