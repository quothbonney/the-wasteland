const express = require('express');
const router = express.Router();
const Ann = require('../../models/annotationModel')
const { 
  createAnnotation,
} = require('../controllers/annotationController')

router.get('/:id', async (req, res) => {
  try {
    const annotation = await Ann.find();
    res.json(annotation)
  } catch {
      res.status(500).json({ message: err.message });
  }
} )

router.post('/', async (req, res) => {
  const {title, text} = req.body
  try {
    const newAnnotation = await Ann.create({title, text});
    res.status(201).json(newAnnotation);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})

module.exports = router;
