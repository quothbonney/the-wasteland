import { Schema, models, model } from 'mongoose';


const annSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})

const AnnotationModel = models.AnnotationModel ||  model('AnnotationModel', annSchema);

export default AnnotationModel;