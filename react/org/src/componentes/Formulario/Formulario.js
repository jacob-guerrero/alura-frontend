import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
        <CampoTexto titulo="Foto" placeholder="Ingresar Enlace de Foto" required/>
        <ListaOpciones/>
        <Boton>
          Crear
        </Boton>
      </form>
    </section>
  );
};

export default Formulario;
