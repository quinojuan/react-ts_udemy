import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // llamado a la API
    reqResApi
      .get<ReqResListado>("/users")
      .then((res) => {
        setUsuarios(res.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = ({
    avatar,
    email,
    first_name,
    last_name,
    id,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td><img src={ avatar } alt={last_name} style={{
          width: 40,
          borderRadius: 50
        }} /></td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem) // tambien podria ser usuarios.map( usuario => renderItem (usuario))
          }
        </tbody>
      </table>
      <button className="btn btn-primary">Siguientes</button>
    </>
  );
};
