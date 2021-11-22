import Link from 'next/link'
import MainLayout from '@layouts/MainLayout'
import PageMeta from '@components/PageMeta';
import { Config } from '@utils/Config';

export default function Contact() {
    return (
        <MainLayout>
            <PageMeta 
                title='Contact'
                description='Null Pointer provides security services such as penetration testing, code auditing and overall organization security posture analysis.'
                url={Config.pageMeta.contact.url}
            />
            <h1>Contact Us</h1>
            <h2>This is the Contact us page</h2>
            <p><Link href="/">Click here to go home</Link></p>
        </MainLayout>
    );
}