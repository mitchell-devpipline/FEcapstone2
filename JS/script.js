function grabData() {
  try{
    const responseData = fetch("MOCK_DATA.json", {})
    .then( res => res.json())
    return responseData
  } catch (error) {
    console.error(error);
  }
}

function capitalizeName(firstName, lastName) {
  return firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase()
}

function addToHTML(fullName, weight) {
  const students = document.getElementsByClassName
  ("bottom-weight-wrapper")[0]
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const buttonDiv = document.createElement("div")
  const div = document.createElement("div")
  const weightNum = document.createTextNode(weight)
  const paragraph = document.createElement("p")
  const addButton = document.createElement("button")
  const minusButton = document.createElement("button")

    div.appendChild(paragraph)
    paragraph.appendChild(fullName)
    paragraph.append(weightNum)
    console.log(students)
    div.classList.add("users")
    students.appendChild(div)
    
      div.appendChild(buttonDiv)
      buttonDiv.appendChild(addButton)
      buttonDiv.appendChild(minusButton)
      addButton.appendChild(add)
      addButton.classList.add("click-add")
      minusButton.appendChild(minus)
      students.appendChild(div)
      
      // addButton.addEventListener("onclick", )s
}
// addToHTML(document.createTextNode(fullName))
  

async function weightControl() {
  const data = await grabData()

  data.forEach(students => {
    const names = document.createTextNode(`${capitalizeName(students.first_name, students.last_name)} : `)
    console.log(names)
    const updateWeight = (students["userWeightControl"] = 1)
    addToHTML(names, updateWeight)
  })
}

weightControl()

