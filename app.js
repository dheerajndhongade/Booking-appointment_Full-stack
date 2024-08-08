let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let port = 8000;
let sequelize = require("./util/database");
let app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

let userRoute = require("./routes/user");

app.use(userRoute);
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Running in ${port}`);
    });
  })
  .catch((err) => console.log(err));
