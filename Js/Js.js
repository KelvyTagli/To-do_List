const todoform = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todobtn = document.querySelector('#todo-btn');
const editform = document.querySelector('#todo-edit');
const editInput = document.querySelector('#edit-input');
const cancelbtn = document.querySelector('#btn-cancel');
const todolist = document.querySelector('#todo-list');

//eventos 
todobtn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = todoInput.value;
    if (input) {
        console.log(input);
    } else {
        alert('Preencha o campo de Adicione sua Tarefa');
    }

    todoInput.value = "";
    todoInput.focus();
});

document.addEventListener('click', (e) => {
    const targetEvent = e.target;
    const parentEl = targetEvent.closest('div');

    if (targetEvent.classList.contains('finish-todo')) {
        parentEl.classList.toggle('todo-done');
    }

    if (targetEvent.classList.contains('edit-todo')) {
        toggleEdit();
    }

    if (targetEvent.classList.contains('remove-todo')) {
        parentEl.remove();
    }
});

cancelbtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleEdit();
})

//Função
const savetodo = (text) => {

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todotitle = document.createElement('h3');
    todotitle.classList.add('todo-title');
    todotitle.innerText = text;
    todo.appendChild(todotitle);

    const btnfinish = document.createElement('button');
    btnfinish.classList.add('finish-todo');
    btnfinish.innerHTML = '<i class="material-icons" style="font-size: small;">check</i>';
    todo.appendChild(btnfinish);

    const btnedit = document.createElement('button');
    btnedit.classList.add('edit-todo');
    btnedit.innerHTML = '<i class="material-icons" style="font-size: small;">create</i>';
    todo.appendChild(btnedit);

    const btnremove = document.createElement('button');
    btnremove.classList.add('remove-todo');
    btnremove.innerHTML = '<i class="material-icons" style="font-size: small;">clear</i>';
    todo.appendChild(btnremove);

    todolist.appendChild(todo);
}

const toggleEdit = () => {
    todoform.classList.toggle('hide');
    editform.classList.toggle('hide');
    todolist.classList.toggle('hide');
}