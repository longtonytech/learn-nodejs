import "module-alias/register";
import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import routers from "./routes";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json();
config();

import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/test")
  .catch((error) => console.log(error));

const port = process.env.PORT || 9999;

const app: Application = express();

const name = process.env.MYNAME || "Kun";
app.use(jsonParser);
app.use("/", routers);
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello " + name);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
export default app;
function handleError(error: any): any {
  throw new Error("Function not implemented.");
}
