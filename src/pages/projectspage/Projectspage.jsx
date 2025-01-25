import styles from './Projectspage.module.scss';
import Projects from '../../components/Projects';

import GitHubLogo from '../../assets/logos/github-logo.webp';


function Projectspage () {

    return (
        <div className= {`${styles.projectsContainer} d-flex flex-fill flex-column`}>
            <section className={`${styles.projectsIntroContainer} d-flex flex-column justify-content-sb align-items-center m-20 text-center`}>
                <h2 className='relative gradient-title-blue'> MES PROJETS</h2>
                <article className='relative'>
                    <p>Ici, vous trouverez une sélection de mes réalisations ou projet en cours.<br />
                    Découvrez différents projets de développement front-end mais aussi full-stack mais aussi de debug & optimisation SEO.<br />
                    <br />
                    Ce portfolio lui-même est développé avec React pour une interface utilisateur dynamique et un code modulaire.<br />
                    Stylisé en SCSS pour une gestion des styles efficace et un design responsive pour adapter l&apos; 'interface et l'expérience utilisateur à tout les supports. 
                    </p>
                </article>
                
            </section>
            <div className='d-flex all-center'>
                <a
                    href='https://github.com/BaptFr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='.logoLink'>
                <img src={GitHubLogo} alt='Github-repository'></img>
                </a>
            </div>
            <section className='test'>
                <Projects />
            </section>
        </div>
    )
};
export default Projectspage;