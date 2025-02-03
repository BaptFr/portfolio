import { useEffect, useState } from 'react';
import LogoBannerDyn from './LogoBannerDyn';
import styles from './StackSection.module.scss';


const sections = [
    { title: 'FRONT-END', key: 'frontend' },
    { title: 'BACK-END', key: 'backend', dataKey: 'backend' },
    { title: (
        <>Outils de développement <br /> & contrôle de version</>),
        key: 'devtools', dataKey: 'devtools' },
    { title: (
        <>Outils de debug<br /> optimisation & SEO </>),
         key: 'seotools', dataKey: 'seotools' },
    { title: (
        <>Outils de collaboration <br /> & veille</>),
         key: 'collaborationtools',
         dataKey: 'collaborationtools' },
];

const TechSection = () => {
    const [techsData, setTechsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Datas recup.
        fetch('data/stack.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données / Error at datas loading');
                }
                return response.json();
            })
            .then((data) => setTechsData(data))
            .catch((err) => setError(err.message));
    }, []);

    // Error message.
    if (error) {
        return <p> Erreur : {error}</p>;
    };
    if (!techsData) {
        return <p>Chargement des données...</p>;
    };

    return (
        <div className={`${styles.stackSectionContainer} d-flex flex-row all-center wrap gap-50`}>
            {sections.map(({ title, key }) => (
                <div key={key} className={`${styles.stackCard} purple-model d-flex flex-column all-center relative z-index1 br-20`}>
                    <div className={`${styles.stackTitle} d-flex all-center m-0 p-20`}>
                        <h3>{title}</h3>
                    </div>
                    <div className= {`${styles.techContainer} mt-30`}>
                        <div className='techBanner '>
                            <LogoBannerDyn
                                jsonFile="data/stack.json"
                                sectionKey={key}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechSection;