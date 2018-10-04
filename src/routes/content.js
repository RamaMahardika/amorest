import Router from "express";
import db from "./../models/fb";

const Content = Router().get("/", (req, res) => {
  const content = db.ref("content");
  content.orderByChild("id").once("value", snap => {
    if (snap.exists()) {
      let content = [];
      snap.forEach(child => {
        content.push({
          id: child.val().id,
          slug: child.key,
          title: child.val().title,
          titleDesc: child.val().titleDesc
        });
      });
      return res.status(200).send({
        status: 200,
        status_respond: "Success",
        body: content
      });
    }
    else {
      return res.status(404).send({
        status: 404,
        status_respond: "Not Found",
        message: "Content Not Found."
      });
    }
  });
});

export { Content };
