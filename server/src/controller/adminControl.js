import mysql from "mysql";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "contraseña12345",
//   database: "theStore",
// });

const db = mysql.createConnection({
  host: "berfinp9tsh1k6yqu993-mysql.services.clever-cloud.com",
  user: "unspl4l656azvazq",
  password: "xIAGTQgUi7ZLBygCXJh",
  database: "berfinp9tsh1k6yqu993",
  port: "20379"
});

const getAdmin = () => {
  return new Promise((resolve, reject) => {
    // oficial query -> queryAboutAdmin = `SELECT * FROM administrators WHERE id = ${req.params.id}`;
    const query = `SELECT * FROM administrators WHERE id = ${1}`;
    db.query(query, (error, adminInfo) => {
      error ? reject(error) : resolve(adminInfo);
    });
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (error, stockInfo) => {
      error ? reject(error) : resolve(stockInfo);
    });
  });
};

export const administrator = async (req, res) => {
  try {
    const [admin, products] = await Promise.all([getAdmin(), getProducts()]);
    res.json({ admin: admin, products: products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//create a function to update the products table
// const update = (id, amount, price, minStock) => {
//   return new Promise((resolve, reject) => {
//     const query = `UPDATE amount = ?, price = ?, minStock = ? WHERE id = ?`;
//     db.query(query, [amount, price, minStock, id], (error, result) => {
//       error ? reject(error) : resolve(result);
//     });
//   });
// };

// create a function to update the administrator table
export const updateAdministrator = (req, res) => {
  const { id, email, password, address, phone } = req.body;
  const query = 'UPDATE administrators SET email = ?, password = ?, address = ?, phone = ? WHERE id = ?';
  db.query(query, [email, password, address, phone, id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Administrador Actualizado' });
    }
  });
};

export const updateProduct = (req, res) => {
  const { id, amount, price, minStock } = req.body;
  console.log(id, amount, price, minStock);
  
  const query = 'UPDATE products SET amount = ?, price = ?, minStock = ? WHERE id = ?';
  db.query(query, [amount, price, minStock, id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Producto Actualizado' });
    }
  });
};


// export const update = (req, res, ) => {
//   const requestData = req.body;

//   if (requestData.hasOwnProperty('email')) {
//     console.log(requestData.email, requestData.password, requestData.address, requestData.phone);
    
//     updateAdmin(requestData.id, requestData.email, requestData.password, requestData.address, requestData.phone)
//       .then((result) => {
//         res.json({ message: "Administrador Actualizado" });
//       }
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//       );
//   } else if (requestData.hasOwnProperty('description')) {
//     updateProduct(requestData.id, requestData.amount, requestData.price, requestData.minStock)
//       .then((result) => {
//         res.json({ message: "Producto Actualizado" });
//       }
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//       );
//   }
// }
