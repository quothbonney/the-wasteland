import connectMongo from '../../../utils/connect'
import AnnotationModel from '../../../models/annotationModel';

export default async function addTest(req, res) {
    try {
    const {title, text} = req.body;
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    const test = await AnnotationModel.create(req.body);
    console.log('CREATED DOCUMENT');
  res.json( { test });
  } catch(err) {
    res.json(err);
  }
}