const list = [
    {
        name: 'create a post',
        status: 'In progress',
        priority: 'Low',
		date: 'Tomorrow'
    },

    {
        name: 'sleep',
        status: 'TODO',
        priority: 'High',
		date: 'Some day',
    },

    {
        name: 'smile',
        status: 'TODO',
        priority: 'Medium',
		date: 'Some day',
    },

    {
        name: 'work',
        status: 'Done',
        priority: 'High',
		date: 'Today',
    },

    {
        name: 'test',
        status: 'Done',
        priority: 'High',
		date: 'Today',
    },

    {
        name: 'water',
        status: 'Done',
        priority: 'Medium',
		date: 'Every day',
    },
]

const options = {
	priority: ['Low', 'Medium', 'High'],
	date: ['Today', 'Tomorrow', 'Every day', 'Some day'],
	status: ['TODO', 'In progress', 'Done'],
}

function changeStatus(taskName, status) {
    list.forEach(task => task['name'] === taskName ? task['status'] = status : null)
    return list
}
function changePriority(taskName, priority) {
	list.forEach(task => task['name'] === taskName ? task['priority'] = priority : null)
	return list
}
function changeDate(taskName, date) {
	list.forEach(task => task['name'] === taskName ? task['date'] = date : null)
	return list
}

function addTask(taskName) {
    const newTask = {
        name: taskName,
        status: options['status'][0],
        priority: options['priority'][0],
		date: options['date'][0]
    }
    list.push(newTask)
    return newTask
}

function deleteTask(taskName) {
    list.map((task, idx) => task['name'] === taskName ? list.splice(idx, 1) : null);
    return list
}

function showList() {
    let result = ``

	for (let key in options) {

		if (key === 'status') {

			for (let i = 0; i < options.status.length; i++) {
				let currentStatus = options.status[i]
				result += `${currentStatus}:\n`

				list.forEach(
					item => currentStatus === item['status']
						? result += `${item[`name`]}\n`
						: null
				)
				result += `\n`
			}
		}
	}
    return result
}

function showBy(value) {
	let listOfValue = ``

	for (let key in options) {
		if (key === value) {
			for (let i = 0; i < options[value].length; i++) {
				let currentValue = options[value][i]
				listOfValue += `${currentValue}:\n`

				list.forEach(
					item => currentValue === item[value]
						? listOfValue += `${item[`name`]}\n`
						: null
				)
				listOfValue += `\n`
			}
		}
	}
	return listOfValue
}


console.log(changeStatus('create a post', 'Done'))
console.log(changePriority('water', 'High'));
console.log(changeDate('test', 'tomorrow'));
// console.log(addTask('have a walk'))
// console.log(deleteTask('test'))
// console.log(showList())
// console.log(showBy('date'))