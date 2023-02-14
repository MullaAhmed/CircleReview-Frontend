import namor from 'namor'

const newSurvey = () => {
  const statusChance = Math.random()
  return {
    surveyName: namor.generate({ words: 1, numbers: 0 }),
    completionRate: Math.floor(Math.random() * 100),
    participants: Math.floor(Math.random() * 1000),
    status:
      statusChance > 0.75
        ? 'Completed'
        : statusChance > 0.50
        ? 'Active'
	: statusChance > 0.25
	? 'Paused'
        : 'Draft',
    reportLink: 'https://www.google.com',
  }
}

export function makeData(count) {
	const data = []
	for (let i = 0; i < count; i++) {
		data.push(newSurvey())
	}
	return data
}

const data = makeData(100)

import fs from 'fs'

fs.writeFile('surveyData.json', JSON.stringify(data), function(err) {
	if (err) throw err
	console.log('Saved!')
});
