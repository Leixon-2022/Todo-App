console.log('Script app.js connected');

const baseUrl = "https://api.jsonbin.io/v3/b/"
const ourTodoUrl = baseUrl + "Fyll i din BinId"
const masterKey = "Fyll i din X-Master-Key"

console.log('BaseUrl:', baseUrl)
console.log('OurTodoUrl:', ourTodoUrl)
console.log('MasterKey:', masterKey)


const App = {
  listOfTodos: [], //vår lista av todos ska in här
  elements: { //Våra "main"-element via ska arbeta mot stoppar vi in här
    container: document.getElementById("todo-container")
  },
  fetchTodos: function () {
    // fetch, inbyggd funktion för att hämta en url
    fetch(ourTodoUrl, {
      method: "GET", //Default, HÄMTA
      headers: {
        "X-Master-Key": masterKey,
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        let data = response;

        console.log("Data:", data.record)

        this.listOfTodos = [] //Denna

        data.record.forEach((obj) => {
          this.listOfTodos.push(obj)
        });

        this.render();

      })
      .catch(function (err) {
        console.log("Error: " + err)
      })

  },
  create: function () {
    const inputTitle = document.querySelector("input[name='todo-title']")
    const inputText = document.querySelector("input[name='todo-text']")

    const newItem = createTodoItem(inputTitle.value, inputText.value)
    this.listOfTodos.push(newItem)

    fetch(ourTodoUrl, {
      method: "PUT", // "putta upp"
      headers: {
        "X-Master-Key": masterKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.listOfTodos)
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {

        let data = response;
        console.log(data)

        //Vi kallar på vår fetchTodos() igen för att hämta items på nytt, för vi har LAGT TILL ett item
        this.fetchTodos()
      })
      .catch(function (err) {
        console.log('Error: ' + err)
      });
  },
  update: function (id) {
    let findItemIndex = this.listOfTodos.findIndex(item => item.id == id)
    this.listOfTodos[findItemIndex].checked = !this.listOfTodos[findItemIndex].checked

    this.render()
  },
  remove: function (id) {

    let findItemIndex = this.listOfTodos.findIndex(item => item.id === id);

    //Ta bort det findItemIndex vi hittar från får array
    this.listOfTodos.splice(findItemIndex, 1);

    //Skicka vår nya lista till "servern"
    fetch(ourTodoUrl, {
      method: "PUT",
      headers: {
        "X-Master-Key": masterKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.listOfTodos)
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {

        let data = response;
        console.log(data)

        //Vi kallar på vår fetchTodos() igen för att hämta items på nytt, för vi har tagit BORT ett item
        this.fetchTodos()
      })
      .catch(function (err) {
        console.log('Error: ' + err)
      })
  },
  render: function () { //Våran funktion för rendera (rita upp i vår HTML i detta fall) alla Todos

    this.elements.container.innerHTML = "" // Vi tömmer våran nuvarande "container"

    resetForm() //Återställer våra forminputs

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

      newBtnCheck.addEventListener("click", function () {
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

function resetForm() {
  document.querySelector("input[name='todo-title']").value = ''
  document.querySelector("input[name='todo-text']").value = ''
}

App.fetchTodos()
App.render()

function logApp() {
  console.log(App)
  console.table(App.listOfTodos)
}