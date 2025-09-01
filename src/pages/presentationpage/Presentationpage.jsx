import { useRef } from 'react';
import styles from './Presentationpage.module.scss';
import StackSection from '../../components/StackSection';
import SkillsSection from '../../components/SkillsSection';
import EducationLogo from '/assets/logos/education-logo.webp';
import WorkLogo from '/assets/logos/work-logo.webp';
import ScrollToTopButton from '../../components/ScrollToTopButton';


function PresentationPage () {
    const topSectionRef = useRef(null);
    const scrollToSection = () => {
        topSectionRef.current.scrollIntoView({behavior: 'smooth'});
    };
        return (
        <div className='d-flex flex-fill flex-column'>
            <ScrollToTopButton targetRef={topSectionRef} />
            <section className={`${styles.introSection} section d-flex flex-column justify-content-sb align-items-center wrap`}>
            <h1 className='gradient-title-blue-center'>PRESENTATION</h1>
                <article className='article  all-center'>
                    <p className='text-shadow-outline' > Retrouvez sur cette page l&apos;ensemble des mes compétences ainsi que mon parcours professionnel.
                    </p>
                    <p className='text-shadow-outline'> Découvrez mes projets ou contactez-moi via le menu.
                    </p>
                </article>
                <div className='arrowsContainer' onClick={scrollToSection}>
                    <div className="arrow1 arrowSliding delay1"></div>
                    <div className="arrow1 arrowSliding delay2"></div>
                    <div className="arrow1 arrowSliding delay3"></div>
                </div>
            </section>
             {/* SECTION ref for scroll intro */}
             <div className='section-top-ref' ref={topSectionRef}  >
             </div>
            {/* SECTION STACK  section (code more robust) */}
            <section className='section'>
                <h1 className='gradient-title-purple'> STACK TECHNIQUE</h1>
                <StackSection />
            </section>
            {/* COMPETENCES section */}
            <section className='section'>
            <h1 className='gradient-title-blue-big'>METHODES <br /> & <br />COMPETENCES</h1>
                <SkillsSection />
            </section >

            {/* SOFTSKILLS section*/}
            <section className='section'>
            <h1 className='gradient-title-orange'>SOFT SKILLS</h1>
            <div className={`${styles.softSkillsContainer} p-30`}>
                    <ul className='d-flex flex-column all-center wrap gap-25'>
                        <div className={`${styles.softSkillsGroupContainers} d-flex flex-row gap-50 `}>
                            <li>CURIOSITE</li>
                            <li>AUTONOMIE</li>
                        </div>
                        <div className={`${styles.softSkillsGroupContainers} d-flex gap-50 `}>
                            <li>ADAPTABILITE</li>
                            <li>ESPRIT D&apos;EQUIPE</li>
                            <li>PERSEVERANCE</li>
                        </div>
                    </ul>
                </div>
            </section>
            <h1 className={`${styles.formationTitle} ${styles.formationTitle} gradient-title-orange-big  mb-5`}>FORMATION <br /> & <br />EXPERIENCE PROFESSIONNELLE</h1>
            <section className={`${styles.formationSection} d-flex flex-column all-center gap-100`}>
                <div className={`${styles.formationLogosLegend} d-flex flex-row `}>
                    <img className='orange-model' src={EducationLogo} alt='education-logo'/>
                    <img className='purple-model' src={WorkLogo} alt='work-logo'/>
                </div>
                <div className={`${styles.timeline}`}>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                            <h4>Certification Professionnelle de Développeur Full Stack</h4>
                            <p> RNCP - Niveau 6 (BAC +3) <br/><br/>
                                IT-Akademy <br/>
                                Campus Région du Numérique <br/>
                                </p>
                    </div>
                    <div className={styles.timelineMiddle}>
                    <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                        <p>Depuis Avr. 2025</p>
                    </div>
                    <div className={styles.timelineEmptyRight}>
                        <p>Depuis Déc. 2024</p>
                        <p></p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div> <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4>Developpeur Front-End React Bénévole</h4>
                        <p>Association Their Memory</p>
                    </div>
                     <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Meta Front-End Developer- Professional Certificate</h4>
                        <p>Meta 9 courses program</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                        <p>Obtention Déc. 2024</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                            <h4>Certification Professionnelle de Développeur web</h4>
                            <p>RNCP - Niveau 5 (BAC +2) <br/><br/>
                            Open ClassRooms
                            </p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>Obtention Juil. 2024</p>

                    </div>
                    <div className={'${styles.timelineEmptyRight} d-flex flex-column justify-content-sb align-items-end'}>
                    <p>Sept. 2023</p>
                    <p>Sept. 2015</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>

                    <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4> Manager métier <br/></h4>
                        <p>Employé < br/> puis cadre commercial < br/> -< br/> Hypermarchés CARREFOUR </p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Titre Professionnnel de Manager < br/>  d&apos; Univers Marchand</h4>
                        <p>RNCP - Niveau 5 (BAC +2) <br/>
                        <br/>
                        AFPA
                        </p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p></p>
                    <p>2014</p>
                    </div>
                    <div className={styles.timelineEmpty}>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} purple-model`}>
                        <h4>Militaire </h4>
                        <p>Armée de Terre</p>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Ecole Nationale des Sous-Officier d&apos; Active </h4>
                        <p>Armée de Terre</p>
                    </div>

                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    </div>
                    <div className={`${styles.timelineComponent} ${styles.timelineContent} orange-model`}>
                        <h4>Baccalauréat </h4>
                        <p>Série Scientifique</p>
                    </div>
                    <div className={styles.timelineMiddle}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.timelineEmpty}>
                    <p>2009</p>
                    </div>
            </div>
            </section>
        </div>
    )
};
export default PresentationPage;
