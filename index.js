document.getElementById('surpriseButton').addEventListener('click', function() {
    // Create a pop-up window for the surprise message
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-button">&times;</span>
            <p>My love, on this special <strong style="color: red;">Valentine’s Day</strong>, I want you to know just how much you mean to me. Your tampo is like a passing storm—brief yet stirring, making me miss your smile even more. And when you finally let me in, your lambing feels like the sun breaking through the clouds, warm and comforting, making me fall for you all over again. No matter how many little storms we face, I will always find my way back to you. Because in this life and the next, <strong style="color: red;">sa huli ikaw ang pipiliin ko at lagi kitang mamahalin. ❤️</strong></p>
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
        width: 400px; /* Increased width for better content fit */
        height: auto; /* Changed to auto to fit content height */
        max-height: 80%; /* Added max-height to prevent overflow */
        overflow-y: auto; /* Added overflow for scrolling if needed */
         font-family: "Satisfy", serif;
  font-weight: 400;
  font-style: normal;
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