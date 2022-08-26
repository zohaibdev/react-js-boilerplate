import { Outlet, Navigate } from 'react-router-dom';
import { isLogin } from '../Middleware/Auth';

function PublicRoute({ restricted }) {
    return (isLogin && restricted) ? <Navigate to="/" /> : <Outlet /> ;
}
export default PublicRoute