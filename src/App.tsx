import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './pages/AppRoutes'
import { ExpenseProvider } from './context/expanseContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
      <BrowserRouter>
        <LanguageProvider>
          <ExpenseProvider>
            <AppRoutes />
          </ExpenseProvider>
        </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
