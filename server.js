const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const productRoutes = require ('./Routes/Product')



dotenv.config();
connectDB();



const app = express();

app.use(express.json());
const cors=require("cors"); 
const corsOptions ={ origin:'*', credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200, } 
 app.use(cors(corsOptions))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

    app.use('/api/product', productRoutes);
app.use('/api/user',require("./Routes/user"));