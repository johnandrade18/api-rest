
const mysqlConnection  = require('../database');
// GET all Clientes
exports.getClientes = (req, res ) => {
    const sql = 'SELECT * FROM clientes';
    mysqlConnection.query(sql, (error, result) => {
      if(!error) {
        res.json(result);
      } else {
        res.send('No hay resultados')
        console.log(error);
      }
    });  
  };
  
  // GET An clientes
  exports.getCliente = (req, res) => {
    const { id } = req.params; 
    const sql =`SELECT * FROM clientes WHERE id = ${id}`;
    mysqlConnection.query(sql, (error, result) => {
      if (!error) {
        res.json(result[0]);
      } else {
        res.send('No hay resultados')
        console.log(error);
      }
    });
  };
  
  // DELETE An clientes
  exports.deleteCliente = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM clientes WHERE id = ${id}`;
    mysqlConnection.query(sql, error => {
      if(!error) {
        res.json({status: 'cliente Eliminado'});
      } else {
        console.log(error);
      }
    });
  };
  
  // INSERT An clientes
  exports.postCliente = (req, res) => {
    const {id, name, salary} = req.params;
    const sql ='INSERT INTO clientes SET ?';
    const clientesObj = {
      name: req.body.name,
      salary: req.body.salary
    };
    mysqlConnection.query(sql, clientesObj, error => {
      if(!error) {
        res.json({status: 'Cliente Guardado'});
      } else {
        console.log(error);
      }
    });
  
  };
  
  exports.putCliente = (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const sql = `UPDATE customers SET name = '${name}', salary='${salary}' WHERE id =${id}`;
    mysqlConnection.query(sql,error => {
      if(!error) {
        res.json({status: 'Cliente Actualizado'});
      } else {
        console.log(error);
      }
    });
  };