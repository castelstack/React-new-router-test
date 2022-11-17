import Sidebar from "../components/sidebar/Sidebar";
import styles from '../styles/tutors.module.css'; 

const StatisticsPage = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div>
            Statistics Page
            </div>
      
        </div>
    );
};

export default StatisticsPage;