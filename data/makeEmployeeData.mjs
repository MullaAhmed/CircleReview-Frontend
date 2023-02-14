import namor from 'namor'

const newEmployee = () => {
  const statusChance = Math.random()
  return {
    employeeName: namor.generate({ words: 1, numbers: 0, saltType: 'mixed' }),
    team: namor.generate({ words: 1, numbers: 0, saltType: 'string', saltLength: 0 }),
    designation: namor.generate({ words: 1, numbers: 0, saltType: 'string', saltLength: 0 }),
    manager: namor.generate({ words: 1, numbers: 0, saltType: 'string', saltLength: 0 }),
    id: Math.floor(Math.random() * 100),
    reviewStatus:
      statusChance > 0.50
        ? 'Completed'
        : 'Pending',
  }
}

export function makeData(count) {
	const data = []
	for (let i = 0; i < count; i++) {
		data.push(newEmployee())
	}
	return data
}

const data = makeData(10)

import fs from 'fs'

fs.writeFile('employeeData.json', JSON.stringify(data), function(err) {
	if (err) throw err
	console.log('Saved!')
});
