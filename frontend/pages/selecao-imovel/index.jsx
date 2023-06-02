import ImovelSelectionBox from '../../components/ImovelSelectionBox';
import BuyImovelBox from '../../components/BuyImovelBox';
import styles from './Shop.module.css'

export default function Shop() {
    const apartments = [
        {
            tokenId: 2,
            name: "AP2",
            description: "Apartamento legal.",
        },
        {
            tokenId: 3,
            name: "AP4",
            description: "Apartamento muito legal.",
        }
    ]
    return (
        <>
            <h1>Escolha o imóvel:</h1>
            <div className={styles.grid}>
                {apartments.map((apartment) => (
                    <ImovelSelectionBox 
                        key={apartment.tokenId} 
                        name={apartment.name} 
                        description={apartment.description} 
                    />
                ))}
                <BuyImovelBox onClick={() => router.push('/imoveis')}/>
            </div>
        </>
    );
}