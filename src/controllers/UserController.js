const Users = require("../models/Users");
module.exports = {
    //GUARDAR
    async store(req, res) {
        
        const user = await Users.create(req.body);
        console.log(req.body);
        return res.json(user);
    },
    //LISTAR 1
    async index(req, res) {
        const user = await Users.findOne({ email: req.params.email });
        return res.json(user);
    },
    //ALTERAR
    async update(req, res) {
        const user = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.json(user);
    },
    //EXCLUIR
    async destroy(req, res) {
        await User.deleteOne({ _id: req.params.id });
        return res.json({ message: "Exclusão realizada com sucesso!" });
    },
    //LISTAR
    async list(req, res) {
        const user = await Users.find({});
        return res.json(user);
    }
}