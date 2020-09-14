const express = require('express');

const app = express();

app.use(express.static('./dist/TourofHeroes'));

app.get('/*', function (req, res) {
  res.sendFile('app.component.html', { root: 'dist/TourofHeroes' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
