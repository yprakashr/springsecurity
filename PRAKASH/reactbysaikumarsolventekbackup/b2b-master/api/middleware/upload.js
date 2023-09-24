const multer = require("multer");

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "uploads/");
    cb(null, "public/uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Define the file validation rules
const fileFilter = (req, file, cb) => {
  // Only accept JPEG and PNG image files
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("File must be a JPEG or PNG image"), false);
  }
};

// Set up multer with the storage and file validation options
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = { upload };
