import styles from './Footer.module.scss';

function Footer () {
    return (
        <footer className= {`${styles.footerContainer}  p-0 p-5`}>
                <p className={`${styles.footerText} text-center`}>Tous droits reservés  <br/> Baptiste Salazar <br/>© 2025
                </p>
        </footer>
    )
};
export default Footer;