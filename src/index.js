import ReactDOM from "react-dom/client";
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/main.scss';
import AppRoute from './Route'
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<AppRoute />);
 
serviceWorker.unregister();
