import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Spacer from '../components/Spacer/Spacer'
import Hero from '../components/Homepage/Hero/Hero';
import Scope from '../components/Homepage/Scope/Scope';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>The Null Pointer - Home</title>
            </Head>
            <Spacer />
            <Hero />
            <Scope />
        </Layout>
    );
}