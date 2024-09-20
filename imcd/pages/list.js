// pages/list.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/List.module.css';

export default function List() {
  const router = useRouter();

  const navigateTo = path => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>List of Corners</title>
        <meta name="description" content="List of corner pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Select a Corner</h1>
        <div className={styles.buttons}>
          <button onClick={() => navigateTo('/corner1')}>Corner 1</button>
          <button onClick={() => navigateTo('/corner2')}>Corner 2</button>
          <button onClick={() => navigateTo('/corner3')}>Corner 3</button>
          <button onClick={() => navigateTo('/corner4')}>Corner 4</button>
        </div>
      </main>
    </div>
  );
}
