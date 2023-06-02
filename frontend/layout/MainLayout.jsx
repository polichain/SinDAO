import Link from 'next/link';
import styles from './TemplatePage.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ConnectButton/>

        <nav>
          <ul>
            <li>
              <Link href="/dao/contas">
                Contas
              </Link>
            </li>
            <li>
              <Link href="/dao/condominio">
                Condomínio
              </Link>
            </li>
            <li>
              <Link href="/dao/reservas">
                Reservas
              </Link>
            </li>
            <li>
              <Link href="/dao/tokens">
                Tokens
              </Link>
            </li>
            <li>
              <Link href="/dao/votacoes">
                Votações
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

