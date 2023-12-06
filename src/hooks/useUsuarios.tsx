import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
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
  return {
    usuarios,
    cargarUsuarios,
    paginaRef
  };
};
