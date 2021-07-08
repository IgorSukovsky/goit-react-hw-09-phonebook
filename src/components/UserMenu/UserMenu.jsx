import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../UserMenu/simpson.png';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispath = useDispatch();
  const avatar = defaultAvatar;
  const name = useSelector(authSelectors.getUsername);
  const onLogout = () => dispath(authOperations.logOut());

  return (
    <div className={style.container}>
      <img src={avatar} alt="" width="32" className={style.avatar} />
      <span className={style.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

// ===================================
// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div className={style.container}>
//     <img src={avatar} alt="" width="32" className={style.avatar} />
//     <span className={style.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );
// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
