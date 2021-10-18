
import styles from './Scope.module.scss';
import Image from 'next/image';

// Images 
import arrow from '/public/arrow_down.svg';
import smallTerminal from '/public/small_terminal.svg';
import bigTerminal from '/public/Terminal.svg';
import cloud from '/public/cloud.svg';
import iPhone from '/public/iPhone.svg';
import infoOnlineProtection from '/public/info_online_protection.png';
import infoLaptop from '/public/info_laptop.svg';
import infoInbox from '/public/info_inbox.svg';

export default function Scope() {
    return (
        <section className={styles.scopeSection}>
            <div className={styles.container}>
                <div className={styles.smallTerminal}>
                    <Image 
                        src={smallTerminal} 
                        alt="Our scope of work" />
                </div>
                <div className={styles.maxW60}>
                    <div className={styles.terminal}>
                        <Image 
                            src={bigTerminal}
                            alt="Our scope of work"/>  
                    </div>
                </div>
                <div className={styles.cloud1}>
                    <Image src={cloud} layout="responsive" alt="Decorative cloud" />
                </div>
                <div className={styles.arrow}><Image src={arrow} alt="Pointer to next section" /></div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoOnpt}>
                        <Image 
                            src={infoOnlineProtection} 
                            layout="responsive" />
                    </div>
                    <div className={styles.cloud2}><Image src={cloud} layout="responsive" alt="Decorative cloud" /></div>
                    <div className={styles.secureApisText}>
                        <h1>Secure your APIs</h1>
                        <p>
                            We’ll test your API’s for any potential leak of PII and critical vulnerabilities such as  SQL injection, SSRF, CSRF, DoS and more! <br /><br />
                            Whether you’re using REST, SOAP, GraphQL or other technologies, we’ll be able to test them.
                        </p>
                    </div>
                </div>
                <div className={styles.arrow}><Image src={arrow} alt="Pointer to next section" /></div>
                <div className={`${styles.infoContainer} ${styles.reversed}`}>
                    <div className={styles.infoOnpt}><Image src={iPhone}/></div>
                    <div className={styles.cloud3}><Image src={cloud} layout="responsive" alt="Decorative cloud" /></div>
                    <div className={styles.secureApiText}>
                        <h1>Mobile Apps</h1>
                        <p>
                            How safe are your mobile users? <br /><br />
                            
                            We’ll check the security of your mobile applications to ensure that your users are protected from other malicious applications and attackers that might want to take over their accounts!
                        </p>
                    </div>
                </div>
                <div className={styles.arrow}><Image src={arrow} alt="Pointer to next section" /></div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoOnpt}><Image src={infoLaptop} /></div>
                    <div className={styles.cloud4}><Image src={cloud} layout="responsive" alt="Decorative cloud" /></div>
                    <div className={styles.secureApiText}>
                        <h1>Web Frontends</h1>
                        <p>
                            Your web frontend may be your most forward facing asset! Don’t leave it exposed and insecure. <br /><br />
                            We’ll make sure that your website and domain are properly protected and provide advisories on improvements where necessary.
                        </p>
                    </div>
                </div>
                <div className={styles.arrow}><Image src={arrow} alt="Pointer to next section" /></div>
                <div className={styles.infoContainer}>
                    <div className={styles.secureApiText}>
                        <h2>At the end, we’ll send you a report with all of our detailed findings and walk you through remediation.</h2>
                        <p>
                            <span>Malicious actors won’t wait, so why should you?</span>
                        </p>
                        <a href="#" className={styles.primaryCta}>Let's have a chat</a>
                        <div className={styles.infoOnpt}><Image src={infoInbox} /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}