import { useState } from "react";
import Header from "./_header.component";

async function fetchShit() {
  const randomNum = Math.floor(Math.random() * 100);
  const teste = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
  const res = await teste.json();
  return res;
}

export async function getServerSideProps(_context: any) {
  const res = await fetchShit();
  return {
    props: { res },
  };
}

export default function RouteTwo(props: any) {
  const [list, setList] = useState(props.res.abilities);

  async function handleClick() {
    const newList = await fetchShit();
    console.log(window.location);
    setList([...newList.abilities, ...list]);
  }

  return (
    <div>
      {<Header />}
      {list.map((a: any, i: number) => {
        return <p key={i}>{a.ability.name}</p>;
      })}
      <button onClick={handleClick}>otherbutton</button>
      <h1>route two</h1>
    </div>
  );
}
