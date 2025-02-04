import { useRef } from 'react';
import styles from './Projectspage.module.scss';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Projects from '../../components/Projects';


function Projectspage () {
     const topSectionRef = useRef(null);
     const scrollToSection = () => {
        topSectionRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className= {`${styles.projectsContainer} d-flex flex-fill flex-column`}>
            <ScrollToTopButton  targetRef={topSectionRef}/>
            <section className={`${styles.projectsIntroContainer} d-flex flex-column justify-content-sb align-items-center text-center `}>
                <h1 className='relative gradient-title-purple-center'> MES PROJETS</h1>
                <article className='relative'>
                    <p className='text-shadow-outline'>Vous trouverez ici une sélection de mes réalisations ou projets en cours.<br />
                    Découvrez différents projets de développement Front-End, Back-End, Full-Stack mais aussi de Debug & Optimisation SEO.<br />
                    <br />
                    Ce portfolio lui-même est développé avec React et stylisé en SCSS pour une gestion des styles efficace et un design responsive.
                    </p>
                </article>
                <div className='arrowsContainer' onClick={scrollToSection}>
                    <div className="arrow2 arrowSliding delay1"></div>
                    <div className="arrow2 arrowSliding delay2"></div>
                    <div className="arrow2 arrowSliding delay3"></div>
                </div>
            </section>
             {/* SECTION ref for scroll intro */}
             <div className='section-top-ref' ref={topSectionRef}  ></div>
            <section>
                <Projects />
            </section>
        </div>
    )
};
export default Projectspage;