const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Resolver la ruta completa del recurso solicitado
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Obtener la extensión del archivo
    const extname = path.extname(filePath);

    // Mapear las extensiones a los tipos de contenido
    const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
    };

    const contentType = contentTypeMap[extname] || 'application/octet-stream';

    // Leer y devolver el archivo solicitado
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Archivo no encontrado
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: Página no encontrada');
            } else {
                // Otro error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Error interno del servidor: ${err.code}`);
            }
        } else {
            // Enviar el contenido del archivo
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Configurar el puerto
const PORT = 4040;

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
