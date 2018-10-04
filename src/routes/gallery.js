import Router from "express";
import db from "./../models/fb";
const content = db.ref("gallery");

const GalleryAll = Router().get("/", (req, res) => {
  content.once('value', snap => {
    if (snap.exists()) {
      let galleries = [];
      let GalleryKey = [];
      snap.forEach(galleryItem => {
        let key = galleryItem.val().category;
        GalleryKey.push(key);
        galleries.push({
          caption: galleryItem.val().caption,
          category: galleryItem.val().category,
          path: galleryItem.val().path
        })
      });
      return res.status(200).send({
        status: 200,
        status_respond: "Success",
        body: {
          gallery: 'All',
          next: [...new Set(GalleryKey)],
          listing: galleries
        }
      });
    }
    else {
      return res.status(404).send({
        status: 404,
        status_respond: "Not Found",
        message: "Content Not Found."
      });
    }
  })
});

const GalleryCategory = Router().get("/:category", (req, res) => {
  const category = req.params.category;
  content.orderByChild('category').equalTo(category).once('value', snap => {
    if (snap.exists()) {
      let galleries = [];
      snap.forEach(galleryItem => {
        galleries.push({
          caption: galleryItem.val().caption,
          category: galleryItem.val().category,
          path: galleryItem.val().path
        })
      });
      return res.status(200).send({
        status: 200,
        status_respond: "Success",
        body: {
          gallery: category.charAt(0).toUpperCase() + category.slice(1),
          listing: galleries
        }
      });
    }
    else {
      return res.status(404).send({
        status: 404,
        status_respond: "Not Found",
        message: `/${category}/ This wouldn't work.`
      });
    }
  })
});

export { GalleryAll, GalleryCategory };
