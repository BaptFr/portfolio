import styles from './Errorpage.module.scss';
import { NavLink } from 'react-router-dom';


function ErrorPage () {
    return (
        <div className={`${styles.errorPageContainer} relative z-index2`}>
            <div className={styles.astronaut}>
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" width="250" />
            </div>
            <div className={styles.astronaut2}>
                <img src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png" alt="" width="250" />
            </div>
            <div className=' relative d-flex flex-column all-center mt-50 z-index4'>
                <h2 className={`${styles.errorTitle} gradient-title-purple mt-40 mb-10`}>ERREUR 404</h2>
                <h2 className={styles.subtitle}>Page Introuvable</h2>
                <div className=' mt-50'>
                    <NavLink to='/' end className={`${styles.returnNavLink} `}>
                                    Retourner sur la page de Présentation
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;