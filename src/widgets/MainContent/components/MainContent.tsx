import { Cart } from '@/widgets/Cart';
import styles from './MainContent.module.css'

export const MainContent = () => {
  return (
    <div className={styles['main-content']}>
      <div className={styles["earth-decor"]}></div>
      <div className={styles['content']}>
        <h1>Nearest asteroid approaches</h1>
      </div>
      <Cart/>
    </div>
  );
};
