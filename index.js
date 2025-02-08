document.getElementById('surpriseButton').addEventListener('click', function() {
    // Create a pop-up window for the surprise message
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-button">&times;</span>
            <p>sa huli ikaw ang pipiliin ko at lagi kitang mamahalin</p>
        </div>
    `;
    document.body.appendChild(popup);

    // Close the pop-up when the close button is clicked
    popup.querySelector('.close-button').addEventListener('click', function() {
        document.body.removeChild(popup);
    });

    // Close the pop-up when clicking outside of the content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            document.body.removeChild(popup);
        }
    });
});

// Add styles for the pop-up
const style = document.createElement('style');
style.innerHTML = `
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .popup-content {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        width: 300px; /* Fixed width */
        height: 200px; /* Fixed height */
        font-family: "Pacifico", serif;
        font-weight: 400;
    }
    .close-button {
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 10px;
        right: 15px;
    }
`;
document.head.appendChild(style);