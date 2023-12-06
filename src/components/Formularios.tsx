import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formulario, email, password, onChange } = useForm();

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />

      <input
        type="text"
        className="form-control mb-2 mt-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
