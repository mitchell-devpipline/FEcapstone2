async function grabData() {
  try{
    const responseData = await fetch("MOCK_DATA.json", {})
    .then( res => res.json())
    return responseData
  } catch (error) {
    console.error(error);
  }
}
console.log(grabData())

function capitalizeName(firstName, lastName) {
  return firstName[0].toUppeerCase() + firstName.
  slice(1)+ ` ` + lastName[0].toUppeerCase()

} 

function addToHTML(fullName) {
  const students = document.getElementsByClassName
  ("bottom-weight-wrapper")[0]
  const div = document.createElement("div")
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const buttonDiv = document.createElement("div")
  const paragraph = document.createElement("p")
  const addButton = document.createElement("button")
  const minusButton = document.createElement("button")

    div.appendChild(paragraph)
    paragraph.appendChild(fullName)
    div.classList.add("all-students")
    console.log(students)
    students.appendChild(div)
    
      div.appendChild(buttonDiv)
      buttonDiv.appendChild(addButton)
      buttonDiv.appendChild(minusButton)
      addButton.appendChild(add)
      minusButton.appendChild(minus)
      students.appendChild(div)

}
  
addToHTML(document.createTextNode("happy"))