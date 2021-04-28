import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { ROUTES } from '../constants';
import { React } from 'react';
import { ReactComponent as TransactionsIcon } from '../assets/icons/receipt.svg';
import classNames from 'classnames';
import iconStyles from '../styles/HeaderBar.module.css';
import styles from '../styles/BottomNavigation.module.css';
import { useHistory } from 'react-router-dom';

const BottomNavigation = (props) => {
  const { handleLogOut } = props;
  const history = useHistory();
  const { pathname } = history.location;

  return (
    <div className={styles.bottomNav__base}>
      <button
        className={iconStyles.icon__container}
        onClick={() => history.push(ROUTES.SNACKS)}
      >
        <HomeIcon
          className={classNames({
            [iconStyles.unselectable]: true,
            [styles.icon__base]: true,
            [styles.icon__active]: pathname === ROUTES.SNACKS
          })}
        />
      </button>
      <button
        className={iconStyles.icon__container}
        onClick={() => history.push(ROUTES.TRANSACTIONS)}
      >
        <TransactionsIcon
          className={classNames({
            [iconStyles.unselectable]: true,
            [styles.icon__base]: true,
            [styles.icon__active]: pathname === ROUTES.TRANSACTIONS
          })}
        />
      </button>
      <button className={iconStyles.icon__container} onClick={() => handleLogOut()}>
        <LogoutIcon
          className={classNames({
            [iconStyles.unselectable]: true,
            [styles.icon__base]: true
          })}
        />
      </button>
    </div>
  );
};

export default BottomNavigation;
