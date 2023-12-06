import { useState } from "react";

export const useForm = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const onChange = (value: string, campo: string) => {
    setFormulario({
      ...formulario,
      [campo]: value,
    });
  };

  return {
    ...formulario,
    onChange,
    formulario,
  };
};
