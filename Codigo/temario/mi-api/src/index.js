// src/index.js
import app from './app.js'; // Importar config creada anteriormente

const PORT = process.env.PORT || 3000; // Puerto de escucha

app.listen(PORT, () => { // Le indicamos que escuche en ese puerto (Arrow Function)
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});