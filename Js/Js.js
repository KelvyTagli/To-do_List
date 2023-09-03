`use client`;

const todoinput = document.querySelector('#todo-input');
const todobutton = document.querySelector('#todo-btn-add');
const todolist = document.querySelector('#todo-list');
const editform = document.querySelector('#edit-form');
const editinput = document.querySelector('#edit-input');
const btnCancel = document.querySelector('#btn-cancel');

todobutton.addEventListener('click', (e) => {

    e.preventDefault();

    const input = todoinput.value;

    if (input) {
        showTodoList(input);
    }
    else {
        alert('Preencha o Campo para criar sua Task');
    }

    todoinput.value = "";
    todoinput.focus();
});

document.addEventListener('click', (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest('div');

    if(targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('todo-done');
    }
});

//funções

const showTodoList = (text) => {

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement("h3");
    todoTitle.classList.add('title');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const btnFinish = document.createElement("button");
    btnFinish.classList.add('finish-todo');
    btnFinish.innerHTML = '<i class="material-icons" style="font-size: medium;">check</i>';
    todo.appendChild(btnFinish);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add('edit-todo');
    btnEdit.innerHTML= '<i class="material-icons" style="font-size: medium;">create</i>';
    todo.appendChild(btnEdit);

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('remove-todo');
    btnRemove.innerHTML = ` <i class="material-icons" style="font-size: medium;">clear</i>`;
    todo.appendChild(btnRemove);

    todolist.appendChild(todo);
};