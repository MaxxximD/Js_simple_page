import { useNavigate } from 'react-router-dom';

    const ProfilePage = () => {
        const navigate = useNavigate();
        const exit = () => {
          localStorage.removeItem('user');
          navigate('/login');
        };
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          >
            <span className="pageTitle">Профиль - Maxim</span>
            <button onClick={exit} className="loginButton">
              Выйти из профиля
            </button>
          </div>
        );
      };
  
  export default ProfilePage;