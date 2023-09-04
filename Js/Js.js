const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todo_btn = document.querySelector('#todo-btn');
const editForm = document.querySelector('#todo-edit');
const editInput = document.querySelector('#edit-input');
const edit_btn = document.querySelector('#edit-button');
const edit_cancel = document.querySelector('#btn-cancel');
const todoList = document.querySelector('#todo-list');
let oldInput;

//Eventos
todo_btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = todoInput.value;
    if (input) {
        saveTodo(input);
    } 
    else {
        alert('Preencha o Campo de Adicione sua tarefa ');
    }

    todoInput.value = "";
    todoInput.focus();
});

edit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const newinputEdit = editInput.value;

    if (newinputEdit) {
        updateInput(newinputEdit);
    }

    toggleEdit();
});

edit_cancel.addEventListener('click', (e) => {
    e.preventDefault();
    toggleEdit();
});

document.addEventListener('click', (e) => {
    const targetEvent = e.target;
    const parentEl = targetEvent.closest('div');
    let input_title;

    if (parentEl && parentEl.querySelector('h3')) {
        input_title = parentEl.querySelector('h3').innerText;
    }

    if (targetEvent.classList.contains('finish-todo')) {
        parentEl.classList.toggle('todo-done');
    }

    if (targetEvent.classList.contains('edit-todo')) {
        toggleEdit();
        editInput.value = input_title;
        oldInput = input_title;
    }

    if (targetEvent.classList.contains('remove-todo')) {
        parentEl.remove();
    }
});

//Função
const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.classList.add('todo-title');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const btnFinish = document.createElement('button');
    btnFinish.classList.add('finish-todo');
    btnFinish.innerHTML = '<i class="material-icons" style="font-size: small;">check</i>';
    todo.appendChild(btnFinish);

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-todo');
    btnEdit.innerHTML = '<i class="material-icons" style="font-size: small;">create</i>';
    todo.appendChild(btnEdit);

    const btnremove = document.createElement('button');
    btnremove.classList.add('remove-todo');
    btnremove.innerHTML = '<i class="material-icons" style="font-size: small;">clear</i>';
    todo.appendChild(btnremove);

    todoList.appendChild(todo);
}

const toggleEdit = () => {
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
    editForm.classList.toggle('hide');
}

const updateInput = (text) => {
    const todo = document.querySelectorAll('.todo');

    todo.forEach((todo) => {
        let titleTask = todo.querySelector('h3');
        if (titleTask.innerText === oldInput) {
            titleTask.innerText = text;
        }
    });
}