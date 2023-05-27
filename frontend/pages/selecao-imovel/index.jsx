import ImovelSelectionBox from '../../components/ImovelSelectionBox';
import BuyImovelBox from '../../components/BuyImovelBox';
import styles from '../../styles/Shop.module.css'

export default function Shop() {
    const apartments = [
        {
            name: "AP2",
            description: "Apartamento legal.",
        },
        {
            name: "AP4",
            description: "Apartamento muito legal.",
        }
    ]
    return (
        <div className={styles.grid}>
            {apartments.map((apartment, index) => (
                <ImovelSelectionBox 
                    key={index} 
                    name={apartment.name} 
                    description={apartment.description} 
                />
            ))}
            <BuyImovelBox onClick={() => router.push('/imoveis')}/>
        </div>
    );
}