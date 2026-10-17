async function getCatFact() {
    document.getElementById("facts").textContent = "Loading because cats are the best, and you should let them take their time."
    const response = await fetch("https://catfact.ninja/fact") 
    const data = await response.json()
    console.log(data)

}
