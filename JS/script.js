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
  students.appendChild(div)
      
      // addButton.addEventListener("onclick", )s
}
// addToHTML(document.createTextNode(fullName))
  

// async function weightControl() {
//   const data = await grabData()
//   let weightCounter = 1;
  
//   data.forEach(students => {
//     const names = document.createTextNode(`${capitalizeName(students.first_name, students.last_name)} : `)
//     // console.log(names)
//     const updateWeight = (students["userWeightControl"] = weightCounter)
//     addToHTML(names, updateWeight)
//     // document.getElementsByClassName(".addButton").addEventListener("click", () => {
//     // count++})
//   })
// }

// weightControl()




async function weightControl(weightCounter) {
  const data = await grabData()
  // console.log(weightCounter)
  
  data.forEach(students => {
    const names = document.createTextNode(`${capitalizeName(students.first_name, students.last_name)} : `)
    const updateWeight = weightCounter

    addToHTML(names, updateWeight)
    add(weightCounter)
  })
}

// nameChanger = document.querySelector("p").innerHTML = "hi"
// This will update the spot for adding in a name


function add(weightCounter) {
  document.querySelector(".click-add").addEventListener("click", () => {
  
  var elems = document.body.getElementsByTagName("*");
  console.log(elems)
  
  numberCount = document.querySelector(".users h1").innerHTML = weightCounter++
  console.log(numberCount)
  })
  
  }





// function add(weightCounter) {
// document.querySelector(".click-add").addEventListener("click", () => {

// var elems = document.body.getElementsByTagName("*");
// console.log(elems)

// button = document.querySelector(".click-add")
// button.setAttribute("button", weightCounter++);
// console.log(weightCounter)})

// }














/*
<body>

<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
*/

weightControl(weightCounter)