import { useState } from "react";

export const Formularios = () => {
  const [formulario, setFormulario] = useState({
    email: "test@test.com",
    password: "123456",
  });

  const onChange = (value: string, campo: string) => {
    setFormulario({
      ...formulario,
      [campo]: value,
    });
  };

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={formulario.email}
      />

      <input
        type="text"
        className="form-control mb-2 mt-2"
        placeholder="Password"
        value={formulario.password}
      />
    </>
  );
};
