require("dotenv/config");
const express = require("express");

const app = express();

//json
app.use(express.json());

const { default: mongoose } = require("mongoose");
const PORT = 3000;

const formModal = require("./formModel");
const commonFuctions = require("./commonFunctions");

app.get("/", (req, res) => {
  res.status(200);
  res.send("Running");
});

app.post("/api/submitForm", async (req, res) => {
  try {
    const data = req.body;
    const formData = new formModal(data);

    const errors = commonFuctions.validateForm(formData);
    if (errors.length > 0)
      return res.status(200).json({
        Status: "Validation error",
        errors,
      });

    // Added duplication check
    const isNameDuplicate = await formModal.findOne({ name: formData.name });

    if (isNameDuplicate)
      return res.status(200).json({
        Status: "Error - Name is already present",
      });

    const saveForm = await formData.save();

    return res.status(200).json({ Status: "Success", saveForm });
  } catch (error) {
    return res.status(505).json({ Status: error.message });
  }
});

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
  })
  .then((msg) => console.log("DB Working"))
  .catch((err) => console.log(`Error`));

app.listen(PORT, (error) => {
  if (!error) console.log("Server is Successfully");
  else console.log("Error occurred, server can't start", error);
});
