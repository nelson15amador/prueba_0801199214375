var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROYECTO DE PRUEBA NELSON AMADOR' });

router.get('/contacto', function(req, res, next) {
  res.render('contacto',{"img": "/images/imagen1.jpg" });
  });
});

router.get('/api/usuarios', function(req,res,next){
  var usuarios = [
    {
      "Nombre":"Nelson",
      "Apellido":"Amador",
      "Identidad": "0801199214375",
      "Correo": "nelson15amador15@gmail.com",
      "Areas":[
          {"Area1":"Programación"},
          {"Area2":"Base de Datos"},
          {"Area3":"Inteligencia de Negocios"}
        ]
    }

              ];
  res.json(usuarios);

});

router.get('/prueba',function(req,res,next){
res.render('mensaje',{"txtmensaje":"","msg":""});
});

var mensajes = [];

router.post('/prueba',function(req,res,next){
console.log(req.body);
mensajes.push(req.body.txtmensaje);
var prueba = mensajes.join("Prueba");
var msgs = {"txtmensaje": req.body.txtmensaje,"msg": prueba };

res.render('mensaje',msgs);
});
module.exports = router;
