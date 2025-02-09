import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './pages/AppRoutes'
import { ExpenseProvider } from './context/expanseContext';

function App() {

  return (
      <BrowserRouter>
        <ExpenseProvider>
          <AppRoutes />
        </ExpenseProvider>
    </BrowserRouter>
  )
}

export default App
