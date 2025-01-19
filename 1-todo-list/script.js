function todoList(todos) {
  // Write your code here...
  const num = document.querySelector("#content");
  const ul = document.createElement("ul");

  function n(event) {
    const li = event.target;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  }

  todos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.todo;
    li.addEventListener("click", n);
    ul.appendChild(li);
  });

  num.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
