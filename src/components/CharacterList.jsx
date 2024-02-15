import { useState, useEffect } from "react";
import { Character } from "./Character";


function NavPage({ page, setPage }) {
  return (
    <header className="d-flex  justify-content-evenly align-items-center bg-dark p-4">
     
      <button
        className="badge text-bg-light"
        onClick={() => setPage(page - 1)}
      >
        Previous Page {page - 1}
      </button>  

      <button className="badge text-bg-light"      
      > Actual Page {page}</button>

      <button
        className="badge text-bg-light"
        onClick={() => setPage(page + 1)}
      >
        Next Page {page + 1}
      </button>  

    </header>   


  );
}


export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);


  return (
    <div className="container-fluid bg-dark ">
      <NavPage page={page} setPage={setPage} />


      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className=" bg-dark col-md-3  py-2 " key={character.id}>
              <Character
                key={character.id}
                image={character.image}
                name={character.name}
                origin={character.origin}
                status={character.status}
               
               
              />
            </div>
          ))}
        </div>
      )}


      <NavPage page={page} setPage={setPage} />
    </div>
  );
}


export default CharacterList;

