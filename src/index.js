import React from "react";
import CreateRoot from 'react-dom/client';
import App from "./components/App";




const contenedor = document.getElementById('root');
const root = CreateRoot.createRoot(contenedor);
root.render(<App tab="home" />);

