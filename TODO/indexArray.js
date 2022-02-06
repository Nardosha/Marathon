const list = [
	{name: 'create a post',
	status: 'In progress',
	priority: 'low'},

	{name: 'sleep',
	status: 'TODO',
	priority: 'high'},

	{name: 'smile',
	status: 'TODO',
	priority: 'Medium'},

	{name: 'test',
	status: 'Done',
	priority: 'high'},
]
const statuses = {
	todo: 'TODO',
	inProgress: 'In progress',
	done: 'Done'
}
const priority = {
	high: 'High',
	medium: 'Medium',
	low: 'Low'
}
function changeStatus(taskName, status) {
	list.forEach(task => task['name'] === taskName ? task['status'] = status : null)
	return list
}

function addTask(taskName) {
	const newTask = {
		name: taskName,
		status: statuses['todo'],
		priority: priority['low']
	}
	list.push(newTask)
	return newTask
}

function deleteTask(taskName) {
	list.map((task, idx) => task['name'] === taskName ? list.splice(idx, 1) : null);
	return list
}

function showList() {
	let todo = []
	let inProgress = []
	let done = []

	list.forEach(function (task, index) {
		if (task.status === statuses.todo) {
			todo.push(task.name)
		} else if (task.status === statuses.inProgress) {
			inProgress.push(task.name)
		} else {
			done.push(task.name)
		}
	})

	let allList = ``

	for(let key in statuses) {
		allList = `${statuses.todo}:\n${todo}\n\n${statuses.inProgress}:\n${inProgress}\n\n${statuses.done}:\n${done}`
	}

	return allList
}

// console.log(changeStatus('create a post', 'Done'))
// console.log(addTask('have a walk'))
// console.log(deleteTask('test'))
console.log(showList())