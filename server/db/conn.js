const mongoose = require("mongoose");
const DB=process.env.DATABASE;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(DB)
.then(() =>{
    console.log("success");
}).catch((err) =>console.log("no connection"));