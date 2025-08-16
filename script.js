document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task) {
        addTask(task);
        input.value = '';
    }
});

document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-btn').click();
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(delBtn);
    document.getElementById('todo-list').appendChild(li);
}
