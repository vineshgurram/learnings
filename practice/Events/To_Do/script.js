const inputForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input[type='text']");
const todoList = document.querySelector(".todo-list");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoInputValue = todoInput.value;
    let createLi = document.createElement("li");
    createLi.innerHTML = ` <div>
                <span class="text">
                    ${todoInputValue}
                </span>
                <button class="btn done">Done</button>
                <button class="btn remove">Remove</button>
            </div>`;
    todoList.append(createLi);
    todoInput.value = "";
});

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        e.target.previousElementSibling.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove()
    }
});