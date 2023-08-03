const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = "";

    console.log(checkComplete());
    const taskContent = document.createElement("div");
    const titleTask = document.createElement('span');
    titleTask.classList.add("task");
    titleTask.innerText = value;
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    taskContent.appendChild(trashIcon);

    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);

    console.log(content);
};

console.log(btn);

//listener
btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");

    return i
}

const completeTask = () => {

}