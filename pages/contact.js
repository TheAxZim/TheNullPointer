import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '@layouts/MainLayout'

export default function Contact() {
    return (
        <MainLayout>
            <Head>
                <title>The Null Pointer - Contact Us</title>
            </Head>
            <h1>Contact Us</h1>
            <h2>This is the Contact us page</h2>
            <p><Link href="/">Click here to go home</Link></p>
        </MainLayout>
    );
}