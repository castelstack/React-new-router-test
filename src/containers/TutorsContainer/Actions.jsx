import styles from '../../styles/tutors.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Actions = () => {
  return (
    <div>
      <button variant='outlined' className={styles.callButton}>
        Outlined
      </button>
      <div className={styles.actionbuttonBox}>
        <button className={styles.actionbutton}>
          <PhoneForwardedOutlinedIcon sx={{ fontSize: 33 }} />
          <p>Call now</p>
        </button>
        <button className={styles.actionbutton}>
          <FavoriteBorderIcon sx={{ fontSize: 33 }} />
          <p>Add to favorite</p>
        </button>
        <button className={styles.actionbutton}>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 33 }} />
          <p>Follow</p>
        </button>
      </div>
    </div>
  );
};

export default Actions;
