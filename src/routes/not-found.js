import Router from 'express';

const NotFound = Router().get('/', (req, res) => {
	res.status(404).send({
		status: 404,
		status_respond: '404. Not Found',
		message: 'Please check your request parameter.'
	});
});

export { NotFound };
