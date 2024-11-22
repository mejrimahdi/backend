const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ajoutez `unique` pour éviter les emails dupliqués
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 18
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Définit les rôles possibles
        default: 'user' // Le rôle par défaut est "user"
    }
});

module.exports = mongoose.model("user", userSchema);
