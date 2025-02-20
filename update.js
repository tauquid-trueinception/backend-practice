const dbConnect = require("./mongoconfig");

const UpdateData = async () => {
  const data = await dbConnect();

  //update one

  //   const result = await data.updateOne(
  //     { name: "Product 1" },
  //     { $set: { price: '1000' } }
  //   );

  //update Many
  const result = await data.updateMany(
    { name: "Product 1" },
    { $set: { price: 1500 } }
  );
  console.log(result);
};
UpdateData();
