import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Register.module.css';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, como enviar los datos a una API.
    console.log('Datos del formulario:', formData);
    // Suponiendo que el registro es exitoso, redirigimos a form.js
    router.push('/form');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register for an account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Register</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}
