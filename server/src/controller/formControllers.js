import mysql from "mysql"
import { alertMail } from "./mails.js"

const products = [];
 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "contraseña12345",
    database: "theStore",
  });

export const login = (req, res) => {
    const requestData = req.body;
    const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
    const query2 = 'SELECT * FROM administrators WHERE name = ? AND password = ?';
    const values = [requestData.name, requestData.password];
    console.log(requestData);
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta', err);
        res.status(500).json({ error: 'Error al verificar las credenciales' });
      } else {
        if (results.length > 0) {
          res.json({ message: 'Credenciales válidas', validation: true, rol:'user' });
        } else {
          // Si no se encuentran resultados en la primera consulta, hacer otra consulta en otra tabla
      
          db.query(query2, values, (err2, results2) => {
            if (err2) {
              console.error('Error al ejecutar la segunda consulta', err2);
              res.status(500).json({ error: 'Error al verificar las credenciales' });
            } else {
              if (results2.length > 0) {
                res.json({ message: 'Credenciales válidas para administrador', validation: true, rol:'admin' });
              } else {
                res.status(401).json({ error: 'Credenciales inválidas' });
              }
            }
          });
        }
      }
    }); 
}

export const sigin = (req, res) => {
    const requesData = req.body
    const query = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
    const values = [requesData.name, requesData.email, requesData.password];
    console.log(requesData);

    db.query(query, values, (err, result) => {
        if (err) {
        console.error('Error al insertar el registro:', err);
        res.status(500).json({ error: 'Error al insertar el registro en la base de datos' });
        } else {
        console.log('Registro insertado exitosamente');
        res.json({ message: 'Registro insertado exitosamente',  validation: true});
        }
    });
}

export const car = (nameProduct, req, res) => {
  const query = 'SELECT * FROM products WHERE name = ?';
  let productObj = {};
  db.query(query, nameProduct)
  .then(result => {
    if (result.length > 0){
        productObj = {
          id: result[0].id,
          name: result[0].name,
          amount: result[0].amount,
          price: result[0].price,
          minStock: result[0].minStock
        }
      }
      products.push(productObj);
  }).catch(
    console.error()
  )
}

const checkInventory = (stock, req, res) => {
  const minStock = 5, maxStock = 30;
  // const testStuck = 16;
  const stock = product.minStuck;

  if (stock >= maxStock || stock <= minStock){
    alertMail();
  }
  
}

export const calculatePrice = (products, req, res) => {
  let prices = 0;
  
  for(let countPos = 0; countPos < products.length; countPos++){
    prices += products[countPos].price;
    checkInventory(products[countPos].minStock);
  }
  return prices;
  
}
