import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Spacer from '../components/Spacer/Spacer'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>The Null Pointer - Contact Us</title>
            </Head>
            <Spacer />
            <h1>Contact Us</h1>
            <h2>This is the Contact us page</h2>
            <p><Link href="/">Click here to go home</Link></p>
        </Layout>
    );
}