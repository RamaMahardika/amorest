import Router from "express";
import db from "./../models/fb";
const content = db.ref("content-child");

const ContentChildAll = Router().get("/", (req, res) => {
  content.once("value", snap => {
    if (snap.exists()) {
      let ContentAll = [];
      let ContentKey = [];
      snap.forEach(content => {
        let subkey = content.key.split("-");
        let key = subkey[0];
        ContentKey.push(key);
        ContentAll.push({
          parrent: key,
          title: content.val().title,
          titleDesc: content.val().titleDesc,
          banner: content.val().banner,
          desc: content.val().desc
        });
      });
      return res.status(200).send({
        status: 200,
        status_respond: "Success",
        body: {
          content: "All",
          next: [...new Set(ContentKey)],
          listing: ContentAll
        }
      });
    } else {
      return res.status(404).send({
        status: 404,
        status_respond: "Not Found",
        message: `/${req.params}/ This wouldn't work.`
      });
    }
  });
});

const ContentChildList = Router().get("/:parent", (req, res) => {
  const parent = req.params.parent;
  content
    .orderByChild("parent")
    .equalTo(parent)
    .once("value", snap => {
      if (snap.exists()) {
        let ParentContent = [];
        let ContentKey = [];
        snap.forEach(content => {
          let subkey = content.key;
          ContentKey.push(subkey.substr(subkey.indexOf("-") + 1));
          ParentContent.push({
            title: content.val().title,
            titleDesc: content.val().titleDesc,
            banner: content.val().banner,
            desc: content.val().desc
          });
        });
        return res.status(200).send({
          status: 200,
          status_respond: "Success",
          body: {
            content: parent.charAt(0).toUpperCase() + parent.slice(1),
            next: [...new Set(ContentKey)],
            listing: ParentContent
          }
        });
      } else {
        return res.status(404).send({
          status: 404,
          status_respond: "Not Found",
          message: `/${parent}/ This wouldn't work.`
        });
      }
    });
});

const ContentChildSingle = Router().get("/:parent/:child", (req, res) => {
  const parent = req.params.parent;
  const child = req.params.child;
  content
    .orderByKey()
    .equalTo(parent + "-" + child)
    .once("value", snap => {
      if (snap.exists()) {
        let singleContent = [];
        snap.forEach(single => {
          singleContent.push({
            title: single.val().title,
            titleDesc: single.val().titleDesc,
            banner: single.val().banner,
            desc: single.val().desc
          });
        });
        res.status(200).send({
          status: 200,
          status_respond: "Success",
          body: singleContent
        });
      } else {
        return res.status(404).send({
          status: 404,
          status_respond: "Not Found",
          message: `/${parent + "/" + child} This wouldn't work.`
        });
      }
    });
});

export { ContentChildAll, ContentChildList, ContentChildSingle };
