var express = require('express');
var router = express.Router();

/* GET new home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Inicio'
  });
});

/* POST página para registro. */
router.post('/registrar', function (req, res, next) {

  var java = 1200;
  var php = 800;
  var net = 1500;
  var costo = 0;
  var nivel;
  var descuento = 0;
  var total = 0;

  // capturando variables del form
  var curso = req.body.curso;
  var nivel = req.body.nivel;
  var pago = req.body.pago;

  // costo del curso
  if (curso == curso.toString()) {
    if ((nivel.length == 2) || (nivel.length == 3)) {
      for (var i = 0; i < nivel.length; i++) {
        if (curso == "java") {
          costo = nivel.length * java;
        } else if (curso == "php") {
          costo = nivel.length * php;
        } else if (curso == "net") {
          costo = nivel.length * net;
        }
      }
    } else {
      if (curso == "java") {
        costo = java;
      } else if (curso == "php") {
        costo = php;
      } else if (curso == "net") {
        costo = net;
      }
    }
  }


//Método de pago
if (pago == "Efectivo") {
  total = costo - (costo * 0.10);
  descuento = costo * 0.10;
} else if (pago == "Tarjeta") {
  total = costo;
  descuento = "No hay descuento";
}

//res.send("Curso: " + curso);
res.render('registro', {
  page: 'Registro',
  title: 'Registro completado',
  costo: costo,
  curso: curso,
  nivel: nivel,
  pago: pago,
  descuento: descuento,
  total: total
});
});

module.exports = router;