import { Navigate } from "react-router-dom";

export default function ProtectRoute({children}) {

    if (localStorage.getItem('token') == null) {
        return <Navigate to='/login'/>
      }
  return children ;
}
