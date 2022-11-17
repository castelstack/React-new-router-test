import Sidebar from '../components/sidebar/Sidebar';
import { TutorContainer } from '../containers/TutorsContainer';
import styles from '../styles/tutors.module.css';

const TutorsPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <TutorContainer />
    </div>
  );
};

export default TutorsPage;
