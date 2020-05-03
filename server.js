const app = require('./src/app');
require('dotenv').config()

const port = process.env.PORT || 3333;
app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${PORT}`);
});