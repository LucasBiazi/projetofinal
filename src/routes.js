// const express = require("express");
// const routes = express.Router();
// const UserController = require("./controllers/UserController");
// const SessionController = require("./controllers/SessionController");

// const authMiddleware = require("./middlewares/auth");

// routes.get("/users/:email", UserController.index);
// routes.post("/sessions", SessionController.store);
// routes.post("/users", UserController.store);
// routes.post("/cadastrar", UserController.store);

// routes.use(authMiddleware);
// routes.delete("users/id:", UserController.destroy);
// routes.get("/teste", (req, res) => res.json({ ok:true }));  

// routes.get("/buscar/:email", UserController.index);
// routes.put("/atualizar/:id", UserController.update);
// routes.delete("/apagar/:id", UserController.destroy);
// routes.get("/listar", UserController.list);

// module.exports = routes;
const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.post("/cadastrar", UserController.store);
routes.get("/buscar/:email", UserController.index);
routes.put("/atualizar/:id", UserController.update);
routes.delete("/apagar/:id", UserController.destroy);
routes.get("/listar", UserController.list);

module.exports = routes;