import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSidePropsContext } from 'next';
import connectMongo from '../utils/connect'
import AnnotationModel from '../models/annotationModel'

function Page({ tests }) {
  console.log(tests);
  return (
  <>
  {tests.map((test) => (<p>{test.title}</p>))}
  </>)
}

export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log('FETCHING DOCUMENT');
    const tests = await AnnotationModel.find();
    console.log('FOUND DOCUMENT'); 
    console.log(JSON.parse(JSON.stringify(tests)));
    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    }
    } catch(err) {
      console.log(err);
      return ({
        props: {tests: []}
      })
    }

}

export default Page;