const list = {
	"play the game": "In progress",
	"finish task portfolio-3": "In progress",
	"finish TODO list": "To Do",
	"find the job": "Done",
}

function changeStatus(task, status) {
	list[task] = status
}

function addTask(task) {
	list[task] = 'To Do'
}

function deleteTask(task) {
	delete list[task]
}

function showList() {
	let result = ''
	let listOfStatus = {
		"To Do": `-`,
		"In progress": `-`,
		"Done": `-`,
	}

	for (let key in list) {

		for (let status in listOfStatus) {

			if (list[key] === status) {

				if (listOfStatus[status] === '-') {
					listOfStatus[status] = `\"${key}\",`
				} else {
					listOfStatus[status] += `\n\"${key}\",`
				}
			}
		}
	}

	result = `Todo:\n${listOfStatus["To Do"]}\n\nIn Progress:\n${listOfStatus["In progress"]}\n\nDone:\n${listOfStatus["Done"]}`

	// As for me, that's the best solution

	// for (let status in listOfStatus) {
	// 	if (status !== "Done") {
	// 		result += `${status}:\n${listOfStatus[status]}\n\n`
	// 	} else {
	// 		result += `${status}:\n${listOfStatus[status]}`
	// 	}
	// }

	console.log(result)
}

changeStatus("finish task portfolio-3", "To Do")
addTask('go to codewars')
deleteTask("play the game")
deleteTask("find the job")
changeStatus("finish TODO list", "In progress")
changeStatus("finish TODO list", "Done")
addTask('go to SLEEP!')
addTask('first work day')
showList()
