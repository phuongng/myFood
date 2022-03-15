import { Fragment } from 'react';
import mealsImage from '../../assets/food.jpg';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles['logo']}>
          <img src={logo} alt="Table of food" />
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Table of food" />
      </div>
    </Fragment>
  );
};

export default Header;