import styles from './LogoBannerDyn.module.scss';
import { useState, useEffect } from 'react';

function LogosBannerDyn({ jsonFile, sectionKey, direction = "vertical" }) {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(jsonFile)
        .then((response) => {
          // JSONfile
          if (!response.ok) {
            throw new Error('Échec de la récupération des données Compétences techniques / Error at the datas recuperation for tech competences');
          }
          return response.json();
        })
        .then((data) => {
          // Array verif.
          if (sectionKey && data[sectionKey]) {
            setLogos(data[sectionKey]);
          } else if (Array.isArray(data)) {
            setLogos(data);
          } else {
            throw new Error('Les données ne sont pas au format attendu / Datas arent in the good format ');
          }
          setLoading(false); // End of lding
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, [jsonFile, sectionKey]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    //Defil direction
    const slideClass = direction === "vertical" ? styles.slideY : styles.slideX

    return (
        <div className={styles.banner}>
            <div className={slideClass}>
                {logos.map((logo) => (
                  <div key={logo.id} className='d-flex flex-column all-center'>
                    <img key={logo.id} src={logo.image} alt={`logo ${logo.name}`} loading="lazy" />
                    <p className='m-0'>{logo.name}</p>
                  </div>
                ))}
                {logos.map((logo) => (
                  <div key={logo.id} className='d-flex flex-column all-center'>
                    <img key={logo.id} src={logo.image} alt={`logo ${logo.name}`} loading="lazy" />
                    <p className='m-0'>{logo.name}</p>
                  </div>
                ))}
                {logos.map((logo) => (
                  <div key={logo.id} className='d-flex flex-column all-center'>
                    <img key={logo.id} src={logo.image} alt={`logo ${logo.name}`} loading="lazy" />
                    <p className='m-0'>{logo.name}</p>
                  </div>
                 ))}
            </div>
        </div>
        );
    }

export default LogosBannerDyn;


