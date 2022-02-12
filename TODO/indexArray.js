let list = [
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

function changeStatus(taskName, newStatus) {
	list.filter(task => task.name === taskName ? task.status = newStatus : null)
    return list
}

function changePriority(taskName, newPriority) {
	list = list.filter(task => task.name === taskName ? task.priority = newPriority : null)
	return list
}

function changeDate(taskName, newDate) {
	list = list.filter(task => task.name === taskName ? task.date = newDate : null)
	return list
}

function addTask(taskName) {
	list.push ({
        name: taskName,
        status: options['status'][0],
        priority: options['priority'][0],
		date: options['date'][0]
    })
	return list
}

function deleteTask(taskName) {
	list = list.filter(item => item.name !== taskName)
	return list
}

function showList() {
    let result = ``

	for (let key in options) {

		if (key === 'status') {

			options.status.forEach(currentStatus => {
				result += `${currentStatus}:\n`

				list.forEach(
					item => currentStatus === item['status']
						? result += `${item[`name`]}\n`
						: null
				)
				result += `\n`
			})

		}
	}
    return result
}

function showBy(condition) {
	let listByCond = ``

	for (let option in options) {
		if (option === condition) {

			options[condition].forEach(currentCondition => {
				listByCond += `${currentCondition}:\n`

				list.forEach(
					task => currentCondition === task[condition]
						? listByCond += `${task[`name`]}\n`
						: null
				)
				listByCond += `\n`
			})
		}
	}
	return listByCond
}

// console.log(changeStatus('create a post', 'Done'))
// console.log(changePriority('water', 'High'));
// console.log(changeDate('test', 'tomorrow'));
// console.log(addTask('have a walk'))
// console.log(deleteTask('test'))
// console.log(showList())
console.log(showBy('date'))