import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Form.module.css';

export default function ProductForm() {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
  });

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, como enviar los datos seleccionados a una API.
    console.log('Opciones seleccionadas:', selectedOptions);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Select Product Options</title>
        <meta name="description" content="Select your product options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Product Options</h1>

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
