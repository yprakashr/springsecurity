/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
require("dotenv").config();

const app = require("./app");

const port = process.env.SERVER_PORT || 3000;
const db = require("./database/db");
const errorHandler = require("./utility/ErrorHandler");
const unhandledRequest = require("./utility/UnhandledError");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("../api/config/passport")(passport);
const corsOption = {
  origin: "*",
};
app.use(cors(corsOption));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "Us-b2bSecretKey",
  })
);
app.use(passport.initialize());
app.use(passport.session());
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(`Database & tables generated!`);
  })
  .catch((err) => {
    console.log(err);
  });

// middleware start
require("./middleware/serverMiddleWare");
// middleware end
app.get("/info", (req, res) => {
  res.json({ version: "1.0.0" });
});
global.__basedir = __dirname;

// Registering routes here
// app.use('/api/appName/', require('./routes/privateRoute'));
app.use("/api", require("./routes/publicRoute"));
app.use("/api", require("./routes/cartRouter"));
app.use("/api", require("./routes/retailerRouter"));
app.use("/api", require("./routes/wholesalerRouter"));
app.use("/api", require("./routes/fileMasterProductsRouter"));
app.use("/api", require("./routes/wholesalerInventoryRouter"));
app.use("/api", require("./routes/backOrderRouter"));
app.use("/api", require("./routes/addressRouter"));
app.use("/api", require("./routes/ordersRouter"));
app.use("/api", require("./routes/returnRouter"));
app.use("/api", require("./routes/termsAndConditionsRouter"));
app.use("/api", require("./routes/reportsRouter"));
app.use("/api", require("./routes/contactRouter"));

app.use(errorHandler);
app.use(unhandledRequest());
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server running on ${port}!`));
