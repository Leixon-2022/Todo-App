console.log('Script app.js connected');


function addTodoItem() {
  console.log('onClick - Add todo item')
  const targetElement = document.getElementById("todo-container")

  const newTodoItem = document.createElement("div")
  newTodoItem.classList.add("todo-item")

  // Add h2-tag to newTodoItem, a title
  const newTodoTitle = document.createElement("h2")
  newTodoTitle.innerText = "Todo title"
  newTodoItem.appendChild(newTodoTitle)

  // Add p-tag, our thing that we should do
  const newTodoText = document.createElement("p")
  newTodoText.innerText = "Something we need to do"
  newTodoItem.appendChild(newTodoText)

  // Add button-tag, a button to remove "node" (newTodoItem)
  const newBtnRemove = document.createElement("button")
  newBtnRemove.innerText = "Remove"
  newBtnRemove.classList.add("btn-remove-todo")
  newBtnRemove.addEventListener("click", function () {
    console.log('onClick - Remove todo item')
    newTodoItem.remove();
  })
  newTodoItem.appendChild(newBtnRemove)

  targetElement.appendChild(newTodoItem)
}