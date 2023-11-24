import * as service from '../../services/productos.opiniones.services.js';

function getOpiniones(req, res) {
  const id = req.params.id;
  service.getOpiniones(id).then(opiniones => {
    res.status(200).json(opiniones);
  });
}

function agregarOpinion( req, res ){
    const id = req.params.id;
    const opinion = {
        nombre: req.body.nombre,
        opinion: req.body.opinion
    };
    service.agregarOpinion(id, opinion).then( () => {
        res.status(201).json(opinion);
    })
}

export {
    getOpiniones,
    agregarOpinion
}