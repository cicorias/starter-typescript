import express from 'express';
import config from "config";

enum ConfigOptions {
    PORT = 'port'
}

const app = express();
let port = 3000;
if (config.has(ConfigOptions.PORT)) {
    port = config.get(ConfigOptions.PORT)
} else {
    console.log(`no port config found, using default ${port}`);
}


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
