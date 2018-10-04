import Router from "express";

const Home = Router().get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    status_respond: "Ok",
    message: "Welcome to Amo SPA Restful Api.",
  });
});

export { Home };