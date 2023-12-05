export const TiposBasicos = () => {
  const nombre: string = "juan";
  const edad: number = 40;
  const estaActivo: boolean = true;

  const poderes: string[] = []; // ["velocidad", "volar", "respirar en el agua"];

//   poderes.push(1); // este tira error porque el tipo de dato no coindide con lo que especifiqué.
  poderes.push("Velocidad");

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre} - {edad} - {estaActivo ? "active" : "inactive"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
