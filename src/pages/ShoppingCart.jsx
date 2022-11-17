import Sidebar from "../components/sidebar/Sidebar";
import styles from '../styles/tutors.module.css'; 

const ShoppingCartPage = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div>
            ShoppingCart
            </div>
      
        </div>
    );
};

export default ShoppingCartPage;