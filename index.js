let express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { DataRouter } = require("./routes/DataRoutes");
let app = express();

app.use(cors());
app.use(express.json());


app.use("/data", DataRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the DB");
  } catch (err) {
    console.log(err);
    console.log("cannot connect to the DB");
  }
  console.log(`Server is running at port ${process.env.port}`);
});
