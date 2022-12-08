// export async function getServerSideProps(_context: any) {
//   const teste = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   const res = await teste.json();
//   console.log(res);
//   return {
//     props: { x: 1 }, // will be passed to the page component as props
//   };
// }

import { useState } from "react";

export default function Header(props: any) {
  // console.log(props);
  const [teste, setTeste] = useState("");

  return (
    <div>
      <h1>HEADER MAROTO</h1>
      <button onClick={() => setTeste(teste + "a")}>clique</button>
      <p>{teste}</p>
    </div>
  );
}
