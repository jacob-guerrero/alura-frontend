import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //Ternario -> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>}; */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programación" />
      <Equipo equipo="Front End" />
      <Equipo equipo="Data Science" />
      <Equipo equipo="DevOps" />
      <Equipo equipo="UX y Diseño" />
    </div>
  );
}

export default App;
