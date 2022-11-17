import React from 'react';
import Header from '../../components/Header';
import Actions from './Actions';
import styles from '../../styles/tutors.module.css';

const TutorContainer = () => {
  return (
    <div className={styles.tutorbox}>
      <Header />
      <div className={styles.videoboxAction}>
        <iframe
          width='100%'
          height='315'
          className={styles.frame}
          src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
          title="intoduction video"
        ></iframe>
        <Actions />
      </div>
    </div>
  );
};

export default TutorContainer;
