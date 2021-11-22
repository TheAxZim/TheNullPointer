import MainLayout from '@layouts/MainLayout'
import Hero from '@components/Homepage/Hero';
import Scope from '@components/Homepage/Scope';
import PageMeta from '@components/PageMeta';
import { Config } from '@utils/Config';

export default function Home() {
    return (
        <MainLayout>
            <PageMeta 
                title='Home'
                description='Null Pointer provides security services such as penetration testing, code auditing and overall organization security posture analysis.'
                url={Config.pageMeta.home.url}
            />

            <Hero />
            <Scope />
        </MainLayout>
    );
}