console.log('Script app.js connected');

// Ett "Top level" object, ett globalt "App"-objekt (egendefinerat)

const App = {
  listOfTodos: [], //vår lista av todos ska in här
  elements: { //Våra "main"-element via ska arbeta mot stoppar vi in här
    container: document.getElementById("todo-container")
  },
  addInitialTodos: function () { //Vi skapar upp 3 initiala Todos som ska renderas vid start
    this.listOfTodos.push(
      createTodoItem("Köket", "Diska vår disk för hand", Date.now() + 1),
      createTodoItem("Vardagsrum", "Städa under soffan (dammigt)", Date.now() + 2),
      createTodoItem("Handla", "Glömde köpa ost på burk, till våra tacochips", Date.now() + 3),
    )
  },
  create: function () { //Våran funktion för att skapa en Todo
    const inputTitle = document.querySelector("input[name='todo-title']")
    const inputText = document.querySelector("input[name='todo-text']")
    //skickar med värdena till funktionen addTodoItem
    //värdena kommer från våra inputs, hämtas via element~.value
    this.listOfTodos.push(createTodoItem(inputTitle.value, inputText.value))
    this.render()
  },
  update: function (id) { //Våran funktion för att update en Todo
    let findItemIndex = this.listOfTodos.findIndex(item => item.id == id)
    this.listOfTodos[findItemIndex].checked = !this.listOfTodos[findItemIndex].checked

    this.render()
  },
  remove: function (id) { //Våran funktion för att ta bort en Todo
    this.render()
  },
  render: function () { //Våran funktion för rendera (rita upp i vår HTML i detta fall) alla Todos

    this.elements.container.innerHTML = "" // Vi tömmer våran nuvarande "container"

    // Vi loopar igenom alla items i listOfTodos
    this.listOfTodos.forEach((item) => {

      const newTodoItem = document.createElement("div")
      const newTodoTitle = document.createElement("h2")
      const newTodoDate = document.createElement("span")
      const newTodoText = document.createElement("p")
      const newBtnRemove = document.createElement("button")
      const newBtnCheck = document.createElement("button") //* Denna
      const newBtnRemoveIcon = document.createElement("img")

      newTodoTitle.innerText = item.title
      newTodoDate.innerText = `${item.id}`
      newTodoText.innerText = item.text
      newBtnRemoveIcon.src = "../assets/ic_trash.svg"
      newBtnCheck.innerText = item.checked ? "Done" : "Mark Done"

      newBtnRemove.appendChild(newBtnRemoveIcon)

      const determineCardColor = `card-color-${item.colorIndex}`

      newTodoItem.classList.add("todo-item", determineCardColor)
      newBtnRemove.classList.add("btn-remove-todo")
      item.checked ? newTodoItem.classList.add("todo-checked") : null

      newBtnRemove.addEventListener("click", function () {
        console.log('onClick - Remove todo item')
        App.remove(item.id);
      })

      newBtnCheck.addEventListener("click", function() {
        App.update(item.id)
      })

      newTodoItem.append(
        newTodoTitle,
        newTodoDate,
        newTodoText,
        newBtnRemove,
        newBtnCheck
      )

      this.elements.container.appendChild(newTodoItem)

    })
  }

}

function createTodoItem(suppliedTitle, suppliedText, suppledId) {

  //slumpmässig siffra mellan 1-3
  const ranColIndex = Math.floor(Math.random() * 3 + 1)

  // elvis-operator ?:    värde/vilkor ? true/finns : false/finns inte
  return {
    id: suppledId ? suppledId : Date.now(),
    title: suppliedTitle,
    text: suppliedText,
    colorIndex: ranColIndex,
    checked: false
  }
}

// denna funktionen körs av input="submit", skickar iväg form
function onFormSubmit() {
  App.create()
}


App.addInitialTodos()
App.render()

function logApp() {
  console.log(App)
  console.table(App.listOfTodos)
}