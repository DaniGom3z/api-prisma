import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 1, 
  message: "Demasiadas solicitudes desde esta IP, por favor intenta nuevamente más tarde.",
});

export default limiter;