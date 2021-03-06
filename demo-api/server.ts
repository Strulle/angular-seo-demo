import * as express from 'express';
import { join } from 'path';
import * as cors from 'cors';
const app = express();
app.use(cors());
app.use(
  '*.*',
  express.static(join(__dirname, 'articles.json'), {
    maxAge: '1y',
  })
);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`api running on http://localhost:${PORT}`);
});
