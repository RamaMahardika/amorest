import Router from 'express';
import db from './../models/fb';
const content = db.ref('gallery');

const GalleryAll = Router().get('/', (req, res) => {
	content.once('value', snap => {
		if (snap.exists()) {
			let GalleryAll = [];
			let GalleryNext = [];
			snap.forEach(GalleryItems => {
				let GalleryItem = GalleryItems.val();
				let GalleryList = {
					caption: GalleryItem.caption,
					category: GalleryItem.category,
					path: GalleryItem.path
				};
				GalleryNext.push(GalleryItem.category);
				GalleryAll.push(GalleryList);
			});
			return res.status(200).send({
				status: 200,
				status_respond: 'Success',
				body: {
					gallery: 'All',
					next: [...new Set(GalleryNext)],
					listing: GalleryAll
				}
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

const GalleryCategory = Router().get('/:category', (req, res) => {
	const category = req.params.category;
	content
		.orderByChild('category')
		.equalTo(category)
		.once('value', snap => {
			if (snap.exists()) {
				let GalleryCategory = [];
				snap.forEach(galleryItems => {
					let galleryItem = galleryItems.val();
					let GalleryList = {
						caption: galleryItem.caption,
						category: galleryItem.category,
						path: galleryItem.path
					};
					GalleryCategory.push(GalleryList);
				});
				return res.status(200).send({
					status: 200,
					status_respond: 'Success',
					body: {
						gallery: category.charAt(0).toUpperCase() + category.slice(1),
						listing: GalleryCategory
					}
				});
			} else {
				return res.status(404).send({
					status: 404,
					status_respond: 'Not Found',
					message: `/${category}/ This wouldn't work.`
				});
			}
		});
});

export { GalleryAll, GalleryCategory };
