import express from "express";
import db from "./db/models/index.js";
// import products from "./services/products/index.js";
// import categories from "./services/categories/index.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());


app.use(express.json());
// app.use("/products", products);
// app.use("/categories", categories);

db.sequelize
    .sync()
    .then(() => {
        app.listen(port, () => console.log("🚀 Server is running on port ", port));

        app.on("error", (error) =>
            console.log("🚀 Server is crashed due to ", error)
        );
    })
    .catch((e) => console.log(e));