import { useState, useEffect } from "react";
import { Character } from "./Character";


function NavPage({ page, setPage }) {
  return (

    //Pagination
    <header className="d-flex  justify-content-end align-items-center bg-dark py-2">

      <nav aria-label="...">

        <ul class="pagination">

          <li class="page-item"><a className="page-link"
            onClick={() => setPage(page - 1)}>Previous</a></li>

          <li class="page-item"><a className="page-link"
          >  {page} </a></li>

          <li class="page-item"><a className="page-link"
            onClick={() => setPage(page + 1)}>Next</a></li>

        </ul>

      </nav>


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
          <div className=""> </div>
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

