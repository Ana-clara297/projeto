//aula 1 do dia 20//
import { useEffect, useState } from "react";


 const App = () => {

  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  

  function boasVindas(){
    alert("Boas vindas");
  }

  useEffect(() => {
    console.log("useEffect foi chamado")
  });
  // nao e muito ultiizada//

  useEffect(() => {
    boasVindas();
    console.log("useEffect que e chamado somente uma vez");
  }, []); //essa e mais ultilizada//

  useEffect(() => {
    console.log("useEffect ativado somente por dependencia");
  }, [count]); //nesse [] e a dependencia//

  return ( 
    <>
    <h1>olla mundo</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Nobis iure illo animi non, vero rem nisi culpa deleniti 
      necessitatibus sit odio explicabo moll</p>
    <h2>contador: {count}</h2>
    <button onClick={() => setcount(count +1)}>add</button>
    <h2>contador: {count2}</h2>
    <button onClick={() => setcount2(count2 +1)}>add</button>
    </>
   );
 }
  
 export default App ;