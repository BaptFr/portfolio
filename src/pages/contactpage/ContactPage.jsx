import { useRef } from 'react';
import styles from './ContactPage.module.scss';
import ScrollToTopButton from '../../components/ScrollToTopButton.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import LinkedinLogo from '/assets/logos/linkedin-logo.webp';
import GithubLogo from '/assets/logos/github-logo-blue.webp';

function ContactPage () {
    const topSectionRef = useRef(null);
         const scrollToSection = () => {
            topSectionRef.current.scrollIntoView({behavior: 'smooth'});
        };
    return (
        <div className={`${styles.PageContainer} d-flex flex-column all-center`}>
           <ScrollToTopButton  targetRef={topSectionRef}/>
            <h1 className='relative mt-30 mb-0 gradient-title-blue-center'> ME CONTACTER </h1>
            {/* SECTION ref for scroll intro */}
            <div className='section-top-ref ' ref={topSectionRef}  ></div>
            <section className={`${styles.contactPageContainer}  section d-flex flex-column justify-content-sb align-items-center wrap br-10`}>
              <div className= {`${styles.contactContainer}  d-flex flex-row all-center text-center gap-50 p-30 wrap`}>
                <div className={`${styles.articleContainer} d-flex flex-column p-40 gap-100  `}>
                    <article className='text-align-center'>
                        <p>Vous souhaitez échanger à propos d&apos;un projet ou une autre demande ? < br/>< br/>
                            N&apos;hésitez surtout pas à me contacter soit par mes réseaux, soit directement en remplissant
                            le formulaire et je vous répondrai dans les plus brefs délais !
                        </p>
                    </article>
                    <div className='d-flex fex-row justify-content-sa gap-20'>
                        <a
                            href='https://www.linkedin.com/in/baptiste-salazar'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            <img  src={LinkedinLogo} alt='linkedin-link m-auto relative' className='image-btn-link' />
                        </a>
                        <a
                            href='https://github.com/BaptFr'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            <img  src={GithubLogo} alt='github-link m-auto relative' className='image-btn-link' />
                        </a>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
            </section>
        </div>
    )
};

export default ContactPage;