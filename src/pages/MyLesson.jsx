import Sidebar from "../components/sidebar/Sidebar";
import styles from '../styles/tutors.module.css'; 

const MyLessonPage = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div>
            My lesson
            </div>
      
        </div>
    );
};

export default MyLessonPage;