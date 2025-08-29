
import AppLayout from './components/layout/AppLayout';
import CryptoContext, { CryptoContextProvider } from './context/crypto-context';

function App() {
  
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}

export default App
