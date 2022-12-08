export async function getServerSideProps(_context: any) {
  return {
    props: { x: 1 }, // will be passed to the page component as props
  };
}

export default function RouteOne(a: any) {
  console.log(a);
  console.log("batata");
  return (
    <div>
      <h1>route one</h1>
    </div>
  );
}
