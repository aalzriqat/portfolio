import { createRoot } from 'react-dom/client';
import App from "./Componants/App"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Amthal from './Componants/Amthal';
import Header from './Componants/Header';
import Gallary from './Componants/Gallary';
import Projects from './Componants/Projects';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route exact path="/portfolio" element={<App/>}/>
        <Route path="/amthal" element={<Amthal/>}/>
        <Route path="/gallery" element={<Gallary/>}/>
        <Route path="/projects" element={<Projects/>}/>

    </Routes>
    </BrowserRouter>
);