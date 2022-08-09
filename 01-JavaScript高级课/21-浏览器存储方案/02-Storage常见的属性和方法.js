localStorage.setItem("name", "xionglp")
localStorage.setItem("age", 100)
localStorage.setItem("height", 1.88)

console.log(localStorage.length)
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(localStorage.getItem(key))
}

// key
console.log(localStorage.key(0))

//getItem(key)
console.log(localStorage.getItem("height"))

// removeItem
// localStorage.removeItem("age")

// clear
// localStorage.clear()