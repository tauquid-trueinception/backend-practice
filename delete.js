const dbConnect = require("./mongoconfig");

const DeleteData = async () => {
  const data = await dbConnect();
  const result = await data.deleteOne({ name: "Product 1" });
  console.log(result);
  if (result.deletedCount) {
    console.log("Data Deleted");
  }
};

DeleteData();
