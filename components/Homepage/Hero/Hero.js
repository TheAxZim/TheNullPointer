
import Image from 'next/image';

import styles from './Hero.module.scss';

import infoConsulting from '/public/info_consulting.png';
import infoReport from '/public/info_report.svg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.mainIllustration}>
                    <div className={styles.heroImg1}>
                        <Image 
                            src={infoConsulting}
                            alt="Consulting Illustration"
                            layout="responsive"
                            objectFit="contain" />
                    </div>
                    <div className={styles.heroImg2}>
                        <Image 
                            src={infoReport}
                            alt="Report Illustration"
                            layout="responsive"
                            objectFit="contain" />
                    </div>
                </div>
                <div className={styles.leftCol}>
                    <h1>Threat Modelling. <br />Penetration Testing. <br /> Let us do the work for you. <span className={styles.subhead}>Professional testing with detailed reports.</span></h1>
        
                    <a href="#" className={styles.primaryCta}>Our Services</a>
                </div>
            </div>
            <hr className={styles.separator} />
        </section>
    );
}