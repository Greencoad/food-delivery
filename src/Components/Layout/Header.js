import {Fragment} from 'react';

import headerImg from '../../Assets/Headerimg.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
      return(
            <Fragment>
                  <header className={styles.header}>
                        <h1>Green Meals</h1>
                        <HeaderCartButton onClick={props.onCartVisible}/>
                  </header>
                  <div className={styles['main-image']}>
                        <img src={headerImg} alt="a delecious Salad" />
                  </div>
            </Fragment>
      );
};

export default Header;