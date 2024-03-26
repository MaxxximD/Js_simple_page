import { useEffect, useState } from "react"
import ProfilePage from "./ProfilePage";
import LoginForm from "../LoginForm/LoginForm";
const Profile = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user === 'admin') {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return isLogged ? <ProfilePage /> : <LoginForm />;
};

export default Profile;