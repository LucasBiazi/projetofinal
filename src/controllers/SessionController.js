const User = require("../models/Users");

module.exports = {
    async store(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if(!user){
            return res.status(400).json({ error: "Usuário não encontrado." });
        }

        if(!(await user.compareHash(password))){
            return res.status(400).json({ error: "Senha inválida." });
        }

        return res.json({ userr, token: User.generateToken(user) });
    }
};