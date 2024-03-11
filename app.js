const express = require("express");
const path = require('path');

// routes
const defaultRoutes = require("./routes/default");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", defaultRoutes);

app.use((req, res) => {
  res.render('404');
})

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});