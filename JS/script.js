function grabData() {
  try{
    const responseData = fetch("MOCK_DATA.json", {})
    .then( res => res.json())
    return responseData
  } catch (error) {
    console.error(error);
  }
}

let weightCounter = 1;

function capitalizeName(firstName, lastName) {
  return firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase()
}

function addToHTML(fullName, weightCounter) {
  const students = document.getElementsByClassName
  ("bottom-weight-wrapper")[0]
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const buttonDiv = document.createElement("div")
  const div = document.createElement("div")
  const weightNum = document.createTextNode(weightCounter)
  const h2= document.createElement("h2")
  const h1 = document.createElement("h1")
  const addButton = document.createElement("button")
  const minusButton = document.createElement("button")

  div.appendChild(h2)
  div.appendChild(h1)
  h2.appendChild(fullName)
  h1.append(weightNum)
  div.classList.add("users")
  
  div.appendChild(buttonDiv)
  buttonDiv.appendChild(addButton)
  buttonDiv.appendChild(minusButton)
  addButton.appendChild(add)
  addButton.classList.add("click-add")
  minusButton.appendChild(minus)
  minusButton.classList.add("click-minus")
  students.appendChild(div);

  addButton.addEventListener("click" , e => {
    handleWeight(e, 1)
  })
  minusButton.addEventListener("click" , e => {
    handleWeight(e, -1)
  })
}

function handleWeight(e, amt) {
  const weightEl = e.target.parentElement.previousElementSibling

  weightEl.innerText = Number(weightEl.innerText) + amt
}

async function weightControl(weightCounter) {
  const data = await grabData()
  
  data.forEach(students => {
    const names = document.createTextNode(`${capitalizeName(students.first_name, students.last_name)} : `)
    const updateWeight = weightCounter

    addToHTML(names, updateWeight)
  
  }) 
}
weightControl(weightCounter)

async function namePicker() {
const nameChanger = document.querySelector("p")
nameChanger.innerHTML = ("Loading...")
const pulse = nameChanger.classList.add("pulsate")
const grab = await random()
const removePulse = nameChanger.classList.remove("pulsate")


nameChanger.innerHTML = grab;
}


async function random() {
  const data = await grabData()

  await timer()
  const randIndex = Math.floor(Math.random() * data.length)

  const randomName = data[randIndex]

  const displayRandomName = (`${capitalizeName(randomName.first_name, randomName.last_name)}`)
  
  console.log(displayRandomName)
  return displayRandomName

}
random()

function timer(ms=3000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

