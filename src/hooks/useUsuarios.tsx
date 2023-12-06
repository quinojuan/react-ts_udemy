import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

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
      console.log({if: paginaRef.current})
      setUsuarios(res.data.data);
    } else {
      paginaRef.current--;
      alert("No hay mas registros");
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  };
};
