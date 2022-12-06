console.log('Script app.js connected');

function addInitialTodos() {
  addTodoItem("Köket", "Diska vår disk för hand")
  addTodoItem("Vardagsrum", "Städa under soffan (dammigt)")
  addTodoItem("Handla", "Glömde köpa ost på burk, till våra tacochips")
}

// När dokumentet laddats så kör vi funktion addInitialTodos
document.addEventListener("load", addInitialTodos())

// denna funktionen körs av input="submit", skickar iväg form
function onFormSubmit() {

  const inputTitle = document.querySelector("input[name='todo-title']")
  const inputText = document.querySelector("input[name='todo-text']")
  //skickar med värdena till funktionen addTodoItem
  //värdena kommer från våra inputs, hämtas via element~.value
  addTodoItem(inputTitle.value, inputText.value)
}

function addTodoItem(title, text) {

  // title = kommer från inputTitle.value
  // text = kommer från inputText.value

  console.log('Add todo item')

  const targetElement = document.getElementById("todo-container")

  const newTodoItem = document.createElement("div")
  const newTodoTitle = document.createElement("h2")
  const newTodoDate = document.createElement("span")
  const newTodoText = document.createElement("p")
  const newBtnRemove = document.createElement("button")
  const newBtnRemoveIcon = document.createElement("img")

  newTodoTitle.innerText = title
  newTodoDate.innerText = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
  newTodoText.innerText = text
  newBtnRemoveIcon.src = "../assets/ic_trash.svg"

  newBtnRemove.appendChild(newBtnRemoveIcon)

  const determineCardColor = `card-color-${Math.floor(Math.random() * 3 + 1)}`
  // class = "todo-item card-color-randomNummer(1-3)"
  newTodoItem.classList.add("todo-item", determineCardColor)
  newBtnRemove.classList.add("btn-remove-todo")

  newBtnRemove.addEventListener("click", function () {
    console.log('onClick - Remove todo item')
    newTodoItem.remove();
  })

  newTodoItem.append(newTodoTitle, newTodoDate, newTodoText, newBtnRemove)
  targetElement.appendChild(newTodoItem)
}