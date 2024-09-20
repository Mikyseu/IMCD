// pages/corner1.js
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Corner.module.css';

export default function Corner4() {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
  });
  const router = useRouter();

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Per conectar a una bd
    console.log('Opciones seleccionadas:', selectedOptions);
  };

  const handleBack = () => {
    router.push('/list');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Corner 1 - Product Options</title>
        <meta
          name="description"
          content="This is corner 1 with product options"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className={styles.backButton} onClick={handleBack}>
        Back to List
      </button>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Corner 1</h1>
        <p className={styles.description}>Select your product options below:</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.productTitle}>Your Product</h2>

          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="option1"
                checked={selectedOptions.option1}
                onChange={handleCheckboxChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                name="option2"
                checked={selectedOptions.option2}
                onChange={handleCheckboxChange}
              />
              Option 2
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
