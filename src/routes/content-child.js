import Router from 'express';
import db from './../models/fb';
const ContentChild = db.ref('content-child');

const ContentChildAll = Router().get('/', (req, res) => {
	ContentChild.once('value', snap => {
		if (snap.exists()) {
			let ContentChildAll = [];
			let ContentNext = [];
			snap.forEach(ContentChildItems => {
				let next = ContentChildItems.key.split('-')[0];
				let ContentChildItem = ContentChildItems.val();
				let ContentList = {
					parrent: next,
					title: ContentChildItem.title,
					titleDesc: ContentChildItem.titleDesc,
					banner: ContentChildItem.banner,
					desc: ContentChildItem.desc
				};
				ContentNext.push(next);
				ContentChildAll.push(ContentList);
			});
			return res.status(200).send({
				status: 200,
				status_respond: 'Success',
				body: {
					content: 'All',
					next: [...new Set(ContentNext)],
					listing: ContentChildAll
				}
			});
		} else {
			res.redirect(`/${process.env.API_PATH}/not-found/`);
		}
	});
});

const ContentChildList = Router().get('/:parent', (req, res) => {
	const parent = req.params.parent;
	let ParentText = parent.charAt(0).toUpperCase() + parent.slice(1);
	ContentChild.orderByChild('parent')
		.equalTo(parent)
		.once('value', snap => {
			if (snap.exists()) {
				let ContentChildLists = [];
				let ContentNext = [];
				snap.forEach(ContentChildItems => {
					let NextKey = ContentChildItems.key;
					let NextExact = NextKey.substr(NextKey.indexOf('-') + 1);
					let ContentChildItem = ContentChildItems.val();
					let ContentList = {
						title: ContentChildItem.title,
						titleDesc: ContentChildItem.titleDesc,
						banner: ContentChildItem.banner,
						desc: ContentChildItem.desc
					};
					ContentNext.push(NextExact);
					ContentChildLists.push(ContentList);
				});
				return res.status(200).send({
					status: 200,
					status_respond: 'Success',
					body: {
						content: ParentText,
						next: [...new Set(ContentNext)],
						listing: ContentChildLists
					}
				});
			} else {
				res.redirect(`/${process.env.API_PATH}/not-found/`);
			}
		});
});

const ContentChildSingle = Router().get('/:parent/:child', (req, res) => {
	const parent = req.params.parent;
	const child = req.params.child;
	ContentChild.orderByKey()
		.equalTo(parent + '-' + child)
		.once('value', snap => {
			if (snap.exists()) {
				let ContentChildSingle = [];
				snap.forEach(ContentChildItems => {
					let ContentChildItem = ContentChildItems.val();
					let ContentList = {
						title: ContentChildItem.title,
						titleDesc: ContentChildItem.titleDesc,
						banner: ContentChildItem.banner,
						desc: ContentChildItem.desc
					};
					ContentChildSingle.push(ContentList);
				});
				res.status(200).send({
					status: 200,
					status_respond: 'Success',
					body: ContentChildSingle
				});
			} else {
				res.redirect(`/${process.env.API_PATH}/not-found/`);
			}
		});
});

export { ContentChildAll, ContentChildList, ContentChildSingle };
