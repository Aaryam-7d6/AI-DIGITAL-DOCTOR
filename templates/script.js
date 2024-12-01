// script.js

// Toggle chatbox visibility
function toggleChatbox() {
    var chatbox = document.querySelector('.chatbox-container');
    chatbox.classList.toggle('open');
}

// Send user message and receive assistant response
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    var chatMessages = document.getElementById('chat-messages');
    var userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    chatMessages.appendChild(userMessage);

    // Simulate assistant response (replace with actual AI integration)
    setTimeout(function() {
        var assistantMessage = document.createElement('div');
        assistantMessage.classList.add('assistant-message');
        assistantMessage.textContent = "I'm sorry, I can't assist with that right now.";
        chatMessages.appendChild(assistantMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom of messages
    }, 500);
    
    document.getElementById('user-input').value = ''; // Clear input field
}