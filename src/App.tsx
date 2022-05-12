import { BrowserRouter as Router } from 'react-router-dom';
import { ARoutes } from './routes';
import GlobalStyle from './styles/global';

export function App() {
   return (
      <>
         <GlobalStyle />
            <Router>
            <ARoutes />
         </Router>
      </>
   );
};


