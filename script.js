const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
const welcomeMessage = document.querySelector('h1[data-source="gpt-storage"]');

function saveName() {
    const username = usernameInput.value;
    localStorage.setItem('username', username);
    displaySavedName();
}

function displaySavedName() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
        updateWelcomeMessage(savedName);
    } else {
        displayName.textContent = '';
        updateWelcomeMessage('User');
    }
}

function clearName() {
    localStorage.removeItem('username');
    displayName.textContent = '';
    updateWelcomeMessage('User');
}

function updateWelcomeMessage(name) {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    welcomeMessage.textContent = `${greeting}, ${name}!`;
}

saveBtn.addEventListener('click', saveName);
clearBtn.addEventListener('click', clearName);

document.addEventListener('DOMContentLoaded', displaySavedName);