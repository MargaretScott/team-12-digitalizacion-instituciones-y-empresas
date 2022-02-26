import './App.css';
import { Welcome } from './components/welcome/welcome';
import { WelcomePartner } from './components/welcome-partner/welcomepartner';
import { Header } from './components/Header/header'
import { About } from './components/About';
import { Profile } from './components/profile/profile';
import {TestClient }from './components/Test-client/testclient';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/partner" element={<WelcomePartner/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/testclient" element={<TestClient />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;




