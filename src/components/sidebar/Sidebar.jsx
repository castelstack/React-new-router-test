import styles from '../../styles/sidebar.module.css';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname, ':how');
  const paths = [
    { path: '/', title: 'Tutors' },
    { path: '/explore', title: 'Explore' },
    { path: '/lesson', title: 'Lesson' },
    { path: '/shopping-cart', title: 'Shopping cart' },
    { path: '/statistics', title: 'Statistics' },
  ];
  return (
    <div className={styles.container}>
      <img
        src='https://res.cloudinary.com/dnvsfxlan/image/upload/v1660493040/cld-sample.jpg'
        alt='logo'
      />
      <div className={styles.tabs}>
        {paths.map((path, i) => (
          <Link
            key={i}
            to={path.path}
            className={`${styles.tab} ${
              path.path === pathname ? styles.active : ''
            }`}
          >
            <SupportAgentOutlinedIcon sx={{ fontSize: 35 }} />
            <p>{path.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
