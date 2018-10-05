import Router from 'express';
import db from './../models/fb';

const Content = Router().get('/', (req, res) => {
	const content = db.ref('content');
	content.orderByChild('id').once('value', snap => {
		if (snap.exists()) {
			let contents = [];
			snap.forEach(ContentItems => {
				let ContentItem = ContentItems.val();
				let ContentList = {
					id: ContentItem.id,
					hasChild: ContentItem.hasChild,
					title: ContentItem.title,
					titleDesc: ContentItem.titleDesc
				};
				contents.push(ContentList);
			});
			return res.status(200).send({
				status: 200,
				status_respond: 'Success',
				body: contents
			});
		} else {
			return res.status(404).send({
				status: 404,
				status_respond: 'Not Found',
				message: 'Content Not Found.'
			});
		}
	});
});

export { Content };
