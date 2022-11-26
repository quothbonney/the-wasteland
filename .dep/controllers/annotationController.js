const Ann = require('../../models/annotationModel')

// Get all annotations

// Create new annotation
const createAnnotation = async (req, res) => {
  const {title, text} = req.body

  // Add doc to db
  try {
    const newAnnotation = await Ann.create({title, text});
    res.status(201).json(newAnnotation);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createAnnotation
}