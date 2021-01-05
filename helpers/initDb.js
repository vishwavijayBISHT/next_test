import mongoose from "mongoose";
// jghaOT9bqCl9wS0I;
function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("alredy connectdd");
    return;
  }
  mongoose
    .connect(
      "mongodb+srv://vishwavijay:jghaOT9bqCl9wS0I@cluster0.fy9wb.mongodb.net/mystoreDB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then((result) => {
      console.log("connectd");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default initDB;
