import Header from '@components/Header';
import Footer from '@components/Footer';

export default function MainLayout(props) {
    
    return (
        <>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    );
}