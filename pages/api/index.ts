import type { NextApiRequest, NextApiResponse } from 'next'
import AnnotationModel from '../../models/annotationModel'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { title, text },
    method,
  } = req

  console.log(req.query["id"]);
  try {
    const annotation = await AnnotationModel.find();
    res.json(annotation)
  } catch(err: any) {
      res.status(500).json({ message: err.message });
  }
}