const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

const UsersSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,          
        },
        password: {
            type: String,
            required: true
        }
    },
    //created_at e updated_at        
    {
        timestamps: true
    }   
);

UsersSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 8);
});

UsersSchema.methods = {
    compareHash(password){
        return bcrypt.compare(password, this.password);
    }
};

UsersSchema.statics = {
    generateToken({ id }){
        return jwt.sign({ id }, authConfig.secret, expiresInauthConfig.ttl);
    }
};

module.exports = model("Users", UsersSchema);