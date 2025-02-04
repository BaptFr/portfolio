import { useState } from 'react';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateName = (name) => {
    const regex = /\d/;
    return !regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email); // Vérifie le format de l'email
  };

  // Gestion événement onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation immédiate lors de la saisie
    if (name === 'name') {
      if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, name: 'Le nom ne doit pas contenir de chiffres.' }));
      } else {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }

    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Email invalide...' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    if (name === 'message') {
      if (value.length > 500) {
        setErrors((prev) => ({ ...prev, message: 'Le message ne doit pas dépasser 500 caractères.' }));
      } else {
        setErrors((prev) => ({ ...prev, message: '' }));
      }
    }
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont valides avant d'envoyer
    if (!formData.name || !formData.email || !formData.message || errors.name || errors.email || errors.message) {
      setStatus('Veuillez corriger les erreurs avant de soumettre.');
      return;
    }

    setSending(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        email: formData.email,
        message: formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('Form send SUCCESS!', response.status, response.text);
      setFormData({ name: '', email: '', message: '' });
      setStatus('Votre message a été envoyé avec succès !');
      setSending(false);
      setShowModal(true);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setStatus('Une erreur s\'est produite, veuillez réessayer.');
      setSending(false);
    });
  };

  return (
    <div>
      <form className= 'd-flex flex-column all-center 'onSubmit={handleSubmit}>
        <div className={styles.linesContainer}>
          <label htmlFor="name">Votre nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={30}
            required
            style={{
              borderColor: errors.name ? 'red' : '',
            }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div className={styles.linesContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              borderColor: errors.email ? 'red' : '',
            }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className={styles.linesContainer}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500} // 500caract limit
            required
            style={{
              borderColor: errors.message ? 'red' : '',
            }}
          ></textarea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <button className='btn-blue' type="submit">Envoyer</button>
      </form>
      {status && <p>{status}</p>} {/*Statut message */}
      {showModal && (
        <div className={styles.contactModal}>
          <div className={styles.contactModalContent}>
            <p>Votre message a été envoyé avec succès !</p>
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;