const express = require('express');
var app = express();

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"))


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
});
