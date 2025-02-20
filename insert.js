const dbConnect = require("./mongoconfig");

const Insert = async () => {
  const db = await dbConnect();
  const result = db.insertOne({
    name: "Product 1",
    brand: "Brand 1",
    price: "1000",
    category: "mobile",
  });
  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

Insert();
