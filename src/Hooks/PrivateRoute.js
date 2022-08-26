import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../Middleware/Auth';

function PrivateRoute({ children }) {
    return isLogin() ? <Outlet /> : <Navigate to="/signin" />;
}
export default PrivateRoute;
