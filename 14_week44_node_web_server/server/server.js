import { fileURLToPath } from 'node:url';
import path from 'node:path';
import http from 'node:http';
import fs from 'node:fs';

//__dirname and __filename are not defined in ES module scope
const dirname = path.dirname(fileURLToPath(import.meta.url));
const fileHTML = path.join(dirname, '..', 'public', 'index.html');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile(fileHTML, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 505;
            res.end();
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(process.env.PORT || 1234);
