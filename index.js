const express = require('express');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 80
const Post = require('./Post.js')
const router = require('./Ruter.js')
const DB_ULR = "mongodb+srv://user:user@cluster0.jsrcs.mongodb.net/z?retryWrites=true&w=majority"

const app = express();

app.use(express.json());
app.use("/api",router)







async function start() {
    try {
        await mongoose.connect(DB_ULR, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => {
            console.log(`server run in port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()