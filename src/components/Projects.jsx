import { useEffect, useState } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {

    fetch('data/projects.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données projects.');
            }
            return response.json();
        })
        .then((data) => setProjectsData(data))
        .catch((error) => setError(error.message));
  }, []);

  if (error) {
  return <p>Error: {error}</p>;
  }
  if (!projectsData) {
  return <p>Chargement des données...</p>;
  }

  return (
    <div className={`${styles.allProjectsContainer} d-flex flex-row all-center wrap p-20 gap-50`}>
      {projectsData.map(({ id, title, image, tech }) => (
        <div
          key={id}
          className={`${styles.projectCard} big-card-container purple-model`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center left',
          }}
          onClick={() => setSelectedCard(id)} // Carte selectionnée
        >
          <div className={`${styles.cardOverlay}`}>
          </div>
          <div className={`${styles.cardTechsBanner} d-flex flex-row all-center p-10 gap-20 wrap`}>
            <h3 className={`${styles.cardTitle} d-flex flex-column `}>{title}</h3>
            {tech && tech.map((tech, index)=> (
              <div key= {index} className={`${styles.techBannerLogosContainer}d d-flex flex-column`}>
                <img  src={tech.url} alt='tech-logo'></img>
                <p>{tech.techname}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* overlay*/}
      {selectedCard !== null && (
        <div className={styles.modal} onClick={() => setSelectedCard(null)}>
          <div className={`${styles.modalContent} purple-model-modal`}>
            {projectsData
              .filter((project) => project.id === selectedCard)
              .map(({ title, links, purpose, techdescription }) => (
                <div key={selectedCard}
                  style={{
                  }}
                >
                  <h3 className='rb gradient-title-purple'>{title}</h3>
                  <p>{purpose}</p>
                  <p> {techdescription}</p>
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

