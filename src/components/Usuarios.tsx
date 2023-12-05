import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(0);

  useEffect(() => {
    // llamado a la API
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const res = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    if (res.data.data.length > 0) {
      setUsuarios(res.data.data);
      console.log(res.data.data);
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }
  };

  const renderItem = ({
    avatar,
    email,
    first_name,
    last_name,
    id,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={last_name}
            style={{
              width: 40,
              borderRadius: 50,
            }}
          />
        </td>
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
      <button className="btn btn-primary" onClick={() => cargarUsuarios()}>
        Siguientes
      </button>
    </>
  );
};
