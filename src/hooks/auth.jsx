import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({children}){
  // eslint-disable-next-line no-undef
  const [ data, setData ] = useState({});


  async function logIn({ email, password }){
    try{
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token})


    } catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possivel entrar");
      }
    }
  }

  function logOut(){
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }){
    //além do usuario, eu vou receber o avatarFile, e fazer um if:
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      setData({ user, token: data.token});
      alert("Perfil atualizado")

    } catch (error) {
      if (error.response){
        alert(error.response.data.message);
      } else {
        alert ("Não foi possivel atualizar o perfil.");
      }
    }
  }

  useEffect(()=>{
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

    return(
      <AuthContext.Provider value={{ 
        logIn,
        logOut,
        updateProfile,
        user: data.user 
        }}
        >
        {children}
      </AuthContext.Provider>
    )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };