import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaContacto, paginaTestimoniales, paginaDetalleViajes } from '../controllers/paginasController.js';
import { gaurdarTestimoniales } from '../controllers/testimonialControllers.js';
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes); // esta explecion se llama comodin y evita crear igaules rutas con informacion distintas"/:"

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', gaurdarTestimoniales)

router.get('/contacto', paginaContacto);

export default router;