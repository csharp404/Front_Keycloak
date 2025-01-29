import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [logout, setLogout] = useState(() => () => {}); // Default to a no-op function
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    const client = new Keycloak({
      url: import.meta.env.VITE_KeyCloak_Url,
      realm: import.meta.env.VITE_KeyCloak_Realm,
      clientId: import.meta.env.VITE_KeyCloak_Client,
    });

    client.init({ onLoad: "login-required" }).then((authenticated) => {
      setIsLogin(authenticated);
      setLogout(() => client.logout);

    });
  }, []);

  return { Islogin: isLogin, Logout: logout };
};

export default useAuth;
