// Load tasks from localStorage when the page loads
window.onload = function() {
    loadTasks();
};

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Don't add an empty task

    const taskList = document.getElementById('todo-list');
    
    // Create a new list item (task)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a "done" button to mark the task as completed
    const span = document.createElement('span');
    span.textContent = 'Done';
    span.onclick = function() {
        li.classList.toggle('completed');
        updateLocalStorage();
    };

    // Add a delete button to remove tasks
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
        updateLocalStorage();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Save the updated list to localStorage
    updateLocalStorage();

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Function to load tasks from localStorage
function loadTasks() {
    const taskList = document.getElementById('todo-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        // Mark the task as completed if it's in localStorage
        if (task.completed) {
            li.classList.add('completed');
        }

        // Add a "done" button to toggle completion
        const span = document.createElement('span');
        span.textContent = 'Done';
        span.onclick = function() {
            li.classList.toggle('completed');
            updateLocalStorage();
        };

        // Add a delete button to remove tasks
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
            updateLocalStorage();
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to update localStorage with the current task list
function updateLocalStorage() {
    const taskList = document.getElementById('todo-list');
    const tasks = [];

    // Get all tasks from the list and store their information
    Array.from(taskList.children).forEach(taskElement => {
        const task = {
            text: taskElement.firstChild.textContent,
            completed: taskElement.classList.contains('completed')
        };
        tasks.push(task);
    });

    // Save the tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
