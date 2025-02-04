import { useState, useEffect } from 'react';
import styles from './SkillsSection.module.scss';

function SkillsSection () {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (()=> {
        fetch('data/skills.json')
        .then (response => {
            if(!response.ok) {
                console.error('Error fetching data:', response.statusText);
                throw new Error ('Failed fetch datas')
            }
            return response.json();
        })
        .then((data) => {
            if (data && Array.isArray(data)) {

                setCards(data);
            }else{
                throw new Error ('Unexisting Data section');
            }
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });

        }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return cards.length > 0 ? (
        <div className={`${styles.skillsSection} d-flex flex-row all-center wrap gap-50  `}>
            {cards.map((card) => (
                <div key={card.id} className='cardContainer blue-model box-shadow'>
                    <div  className='card-title-container'>
                      <h3>{card.title}</h3>
                      <img src={card.image} alt={`sketch-${card.title}`}></img>
                   </div>
                   <div className='card-text-container'>
                     <p className={styles.skillsTextContainer}> {card.text}</p>
                   </div >
                </div>
        ))}
        </div>
    ) : ( <p> Pas de données disponibles / No datas available</p>)
}

export default SkillsSection;