import styles from "./Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60*" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="blue" />
        </svg>
      </div>
      <div className={styles.buttons}>
        <h1 className={styles.cumprimento}>Bem-vinde ao SinDAO</h1>
        <ConnectButton onClick={() => router.push('/selecao-imovel')}></ConnectButton>
        <button className={styles.button} onClick={() => router.push('/imoveis')}>Comprar apartamento</button>
      </div>
    </div>
  );
}
