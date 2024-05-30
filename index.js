
const generateBtn = document.querySelector("img")

generateBtn.addEventListener("click", function () {

	fetch("https://apis.scrimba.com/bored/api/activity")
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const activityArea = document.getElementById("activities-area")
			activityArea.textContent = data.activity
		})
		
})
