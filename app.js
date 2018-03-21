const express = require('express')
const app = express()

app.get('/', (req, res) => {
		console.log('Example app on get')
		return res.status(200).json([{id: 123}])	
	}
);

app.get('/:id', (req, res) => {
		console.log(`Example app on get with ${req.params.id}`)
		return res.status(200).json({id: req.params.id})	
	}
);

app.listen(3001, () => console.log('Example app listening on port 3001!'))