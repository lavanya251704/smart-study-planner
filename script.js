let timeLeft = 25 * 60;
let timerId = null;

// Timer Logic
document.getElementById('startTimer').onclick = () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        document.getElementById('startTimer').innerText = "Resume";
    } else {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("Sprint Complete! Take a 5-min break.");
                document.getElementById('sessionCount').innerText++;
            }
        }, 1000);
        document.getElementById('startTimer').innerText = "Pause";
    }
};

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Task Logic
function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priority').value;
    
    if (!input.value) return;

    const li = document.createElement('li');
    li.className = priority;
    li.innerHTML = `
        <span>${input.value}</span>
        <div>
            <button onclick="this.parentElement.parentElement.remove()">Done</button>
        </div>
    `;
    
    document.getElementById('taskList').appendChild(li);
    input.value = "";
}