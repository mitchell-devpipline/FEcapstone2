fetch("mockData.json", {})

.then(res => res.json())

.then(data => console.log(data))

.catch(err => console.log(err))

// fetch("MOCK_DATA.json")

// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


// fetch("./")
// .then(res => res.text())
// .then(data => console.log(JSON.parse(data)))
// .catch(err => console.log(err))