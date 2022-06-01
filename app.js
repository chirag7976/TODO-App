const todoContainer = document.querySelector(".todo-container");

const submitBtn = document.querySelector(".sub-btn");

const input = document.querySelector(".f-input");

const todosContainer = document.querySelector(".todos");

const todoForm = document.querySelector(".todo-form");

const todoItem = document.querySelector(".todo-item");

const searchInput = document.querySelector(".search-input");

const generateTodos = (todo) => {
  const text = `<li class="todo-item">
                    <span class="todo-text">
                        ${todo}
                    </span>
                    <i class="fa-solid fa-trash delete"></i>
                </li>`;

  todosContainer.innerHTML += text;
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo) {
    generateTodos(todo);
    todoForm.reset();
  }
});

todoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//toggle completed
todoContainer.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.toggle("completed");
  }
});

//Todos filter
const filterTodos = (query) => {
  const todoItems = Array.from(todosContainer.children);
  todoItems.forEach((todo) => {
    const text = todo.textContent;
    if (text.toLowerCase().includes(query)) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
};

// search items
searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.trim().toLowerCase();
  filterTodos(query);
});
