const addTask = document.getElementById('addTask');
const userInput = document.getElementById('userInput');
const taskContainer = document.getElementById('taskContainer');

addTask.addEventListener('click', () => {

    const task = document.createElement('div');
    task.classList.add('task');

    const list = document.createElement('li');
    list.innerText = `${userInput.value}`;
    task.appendChild(list);

    const checkButton = document.createElement('button');
    checkButton.classList.add('checkBtn');
    checkButton.innerHTML = "<i class='bx bx-check'></i>";
    task.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBtn');
    deleteButton.innerHTML = "<i class='bx bx-trash' ></i>";
    task.appendChild(deleteButton);

    if (userInput.value === "") {
        alert('Please Enter any Task');
    } else {
        taskContainer.appendChild(task);
    }

    userInput.value = '';

    checkButton.addEventListener('click', () => {
        checkButton.parentElement.style.textDecoration = 'line-through';
    });

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;
        
        target.parentElement.parentElement.remove();
        
    });

});