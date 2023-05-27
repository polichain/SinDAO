import ImovelSelectionBox from '../../components/ImovelSelectionBox';
import styles from '../../styles/Shop.module.css'

export default function Shop() {
    const apartments = [
        {
            name: "AP1",
            description: "Apartamento no primeiro andar.",
            value: 1234.00
        },
        {
            name: "AP7",
            description: "Apartamento no segundo andar.",
            value: 2900.00
        },
        {
            name: "AP9",
            description: "Apartamento no segundo andar.",
            value: 2100.00
        },
        {
            name: "AP13",
            description: "Apartamento com ampla varanda.",
            value: 1234.00
        },
        {
            name: "AP17",
            description: "Apartamento com 86m2.",
            value: 2900.00
        },
        {
            name: "AP9",
            description: "Apartamento lindo.",
            value: 2100.00
        },
    ]
    return (
        <>
        <h1>Imoveis disponiveis:</h1>
        <div className={styles.grid}>
            {apartments.map((apartment, index) => (
                <ImovelSelectionBox 
                    key={index} 
                    name={apartment.name} 
                    description={apartment.description} 
                    value={apartment.value.toString()}
                />
            ))}
        </div>
        </>
    );
}