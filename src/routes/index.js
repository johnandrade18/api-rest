const express = require("express");
const router = express.Router();

const {
  getClientes,
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
} = require("../controllers");

router
      .route('/')
      .get(getClientes)
      .post(postCliente)
      
router
      .route('/:id')
      .get(getCliente)
      .put(putCliente)
      .delete(deleteCliente)

module.exports = router;
