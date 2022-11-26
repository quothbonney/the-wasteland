import type { NextApiRequest, NextApiResponse } from 'next'
import AnnotationModel from '../../models/annotationModel'
const ObjectId = require('mongo-objectid');

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { title, text },
    method,
  } = req
  try {
    const annotation = await AnnotationModel.find({
      _id: new ObjectId(req.query["id"])
    });
    res.json(annotation)
  } catch(err: any) {
      res.status(500).json({ message: err.message });
  }
}