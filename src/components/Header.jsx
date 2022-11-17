import { Avatar } from '@mui/material';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerbox}>
        <p>Welcome</p>
        <Avatar sx={{ bgcolor: 'transparent', color: '#090909' , border: 'solid 1px #090909' }}>H</Avatar>
      </div>
    </div>
  );
};

export default Header;
