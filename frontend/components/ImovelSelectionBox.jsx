import styles from './ImovelSelectionBox.module.css';

export default function ImovelSelectionBox({ name, description, value }) {
    return (
        <div className={styles.whiteBox}>
          <h2>{name}</h2>
          <p>{description}</p>
          {(value > 0) && <p className={styles.price}>R${value}</p>}
        </div>
      );
}