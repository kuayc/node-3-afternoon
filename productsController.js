let create = (req, res) => {
  const dbInstance = req.app.get("db");
  const { name, description, price, image_url } = req.body;

  dbInstance
    .createProduct(name, description, price, image_url)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something wrong" });
      console.log(err);
    });
};

let getOne = (req, res) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .readProduct(id)
    .then(product => res.status(200).send(product))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something wrong" });
      console.log(err);
    });
};

let getAll = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .readProducts()
    .then(products => res.status(200).send(products))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something wrong" });
      console.log(err);
    });
};

let update = (req, res) => {
  const dbInstance = req.app.get("db");
  const { params, query } = req;

  dbInstance
    .updateProduct(query.desc, params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something wrong" });
      console.log(err);
    });
};

let remove = (req, res) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .deleteProduct(id)
    .then(products => res.send(200).send(products))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something wrong" });
      console.log(err);
    });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  remove
};
