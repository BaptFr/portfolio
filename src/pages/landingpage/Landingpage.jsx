import styles from './Landingpage.module.scss';
import { NavLink } from 'react-router-dom';

function LandingPage () {

    return (
        <div className={`${styles.landingPageContainer} d-flex flex-colum justify-content-center relative z-index1` }>
            <div className={styles.astronaut}>
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" width="210" />
            </div>
            <div className={styles.astronaut2}>
                <img src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png" alt="" width="280" />
            </div>
            <div className='  z-index1 relative d-flex flex-column all-center mt-50  gap-50 z-index4'>
                <div className=''>
                    <h1 className={`${styles.landingTitle} gradient-title-purple-center mt-40`}>Bienvenue sur mon</h1>
                    <h1 className={`${styles.landingTitle}  relative z-index1 gradient-title-purple-center mt-40 mb-10`}> Portfolio</h1>
                </div>
                <div className= ' d-flex flex-column all-center'>
                <h2 className={`${styles.landingSubtitle} text-shadow-outline `}>Retrouvez ici mon parcours, compétences et mes différents projets</h2>
                    <NavLink to='presentation' end className={`${styles.buttonLink} `}>
                            PAR ICI <i className='fa-solid fa-circle-chevron-right'></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;