const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API Restaurante funcionando ");
});

// Obtener todas las experiencias
app.get("/experiencias", async (req, res) => {
    try {
        const resultado = await pool.query(`
            SELECT
                e.id,
                r.nombre AS region,
                e.titulo,
                e.descripcion,
                e.categoria,
                e.precio,
                e.video,
                e.invertida
            FROM experiencias e
            INNER JOIN regiones r
                ON e.region_id = r.id
            ORDER BY e.id;
        `);

        res.json(resultado.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener experiencias"
        });
    }
});

app.get("/experiencias/:region", async (req, res) => {
    try {
        const { region } = req.params;

        const resultado = await pool.query(
            `
            SELECT
                e.id,
                r.nombre AS region,
                e.titulo,
                e.descripcion,
                e.categoria,
                e.precio,
                e.video,
                e.invertida
            FROM experiencias e
            INNER JOIN regiones r
                ON e.region_id = r.id
            WHERE LOWER(r.nombre) = LOWER($1)
            ORDER BY e.id;
            `,
            [region]
        );

        res.json(resultado.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener experiencias"
        });
    }
});

app.post("/reservas", async (req, res) => {
    try {

        const {
            nombre,
            email,
            telefono,
            fecha,
            region,
            comensales,
            mensaje
        } = req.body;

        // Buscar el id de la región
        const regionResult = await pool.query(
            "SELECT id FROM regiones WHERE LOWER(nombre)=LOWER($1)",
            [region]
        );

        if (regionResult.rows.length === 0) {
            return res.status(400).json({
                mensaje: "Región no encontrada"
            });
        }

        const region_id = regionResult.rows[0].id;

        await pool.query(
            `
            INSERT INTO reservas
            (nombre, correo, telefono, fecha, comensales, mensaje, region_id)
            VALUES($1,$2,$3,$4,$5,$6,$7)
            `,
            [
                nombre,
                email,
                telefono,
                fecha,
                comensales,
                mensaje,
                region_id
            ]
        );

        res.json({
            mensaje: "Reserva registrada correctamente"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al registrar la reserva"
        });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});