export const ObjetosLiterales = () => {
    
  interface Persona { // las interfaces no sirven para crear instancias const persona = new Persona(); solo sirven para poner reglas de validacion a los objetos
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
  }

  interface Direccion {
    pais: string;
    casaNo: number;
  }

  const persona: Persona = {
    nombreCompleto: "Juan",
    edad: 40,
    direccion: {
      pais: "Argentina",
      casaNo: 615,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
