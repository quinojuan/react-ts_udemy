import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter(0);

  return (
    <>
      <h2>
        Contador con Hook: <small>{valor}</small>
      </h2>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
