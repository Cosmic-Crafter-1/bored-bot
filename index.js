
const generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", function () {

	fetch("https://apis.scrimba.com/bored/api/activity")
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const activityArea = document.getElementById("activities-area")
			activityArea.textContent = data.activity
		})

	document.querySelector(".container").style.backgroundColor = getColor()

})

function getColor(){ 
    return "hsl(" + (30 + 60 * Math.random()) + ',' +
               (70 + 20 * Math.random()) + '%,' + 
               (70 + 10 * Math.random()) + '%)'
}



// In case if you wanted to Create a new line for the API text.
// const brElement = document.createElement("br")

// Append the new elements to the activities area.
// activityArea.appendChild(brElement)

// Another way to create new node in document tree that represents plain text.
// const activity = document.createTextNode(data.activity) 