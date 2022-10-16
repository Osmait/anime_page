import express from "express";
import { db } from "../config/db.js";
import router from "../routes/routes.js";


class Server {
  constructor() {
     this.whiteList = "http://localhost:5173"

    this.app = express();
    this.PORT = 3000;
    this.middlewares();
    this.routers();
    this.dbConnection();
  }

  middlewares() {
  

    this.app.use(express.json());
  
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server on port ${this.PORT}`);
    });
  }

  routers() {
    this.app.use("/api", router);
  }

  dbConnection() {
    try {
      db.authenticate();
    } catch (error) {
      console.log(error);
    }
  }
}

export default Server;
