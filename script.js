// Function to add a task
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Don't add an empty task

    const taskList = document.getElementById('todo-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a "done" button to mark the task as completed
    const span = document.createElement('span');
    span.textContent = 'Done';
    span.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(span);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}
