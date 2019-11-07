const express = require("express") // traemos la dependencia express
const app = express() // iniciamos el objeto del servidor

const { Book, User } = require("./schemas")

app.use(express.json())

// cuando el servidor esté listo, ejecutamos una función
app.listen(8080, function() {
    console.log("Servidor escuchando :)") // enviamos un mensaje a la consola
})
