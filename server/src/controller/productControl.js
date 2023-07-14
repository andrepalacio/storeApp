import mysql from "mysql";

const db = mysql.createConnection({
  host: "berfinp9tsh1k6yqu993-mysql.services.clever-cloud.com",
  user: "unspl4l656azvazq",
  password: "xIAGTQgUi7ZLBygCXJh",
  database: "berfinp9tsh1k6yqu993",
  port: "20379"
});

// export const getProducts = () => {
//     // const query = `SELECT * FROM products`;
//     // return new Promise((resolve, reject) => {
//     //   db.query(query, (error, stockInfo) => {
//     //     error ? reject(error) : resolve(stockInfo);
//     //   });
//     // });

//     const query = `SELECT * FROM products`;
//     db.query(query, (error, stockInfo) => {
//         error ? console.log(error) : console.log(stockInfo);
//         })
// };


export const getProducts = (req, res) => {
    const query = `SELECT * FROM products`;
    db.query(query, (error, stockInfo) => {
        error ? console.log(error) : res.json(stockInfo);
        })
}


export const getProductsById = (req, res) => {
    const query = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(query, (error, stockInfo) => {
        error ? console.log(error) : res.json(stockInfo);
        })
}


