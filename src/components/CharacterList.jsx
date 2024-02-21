import { useState, useEffect } from "react";
import { Character } from "./Character";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function NavPage({ page, setPage }) {
  return (

    //Pagination
    <header className="d-flex justify-content-end  bg-dark py-2">

  <div class="btn-group ">

      <button
        className="btn btn-secondary"
        onClick={() => setPage(page - 1)} >
        <FontAwesomeIcon icon={faAngleLeft} className="text-white fs-4 " />
      </button>

      <button
       className="btn btn-secondary text-white fs-4  fw-bolder "    
      > {page}
      </button>


      <button
        className="btn btn-secondary"
        onClick={() => setPage(page + 1)} >
        <FontAwesomeIcon icon={faAngleRight} className="text-white fs-4 " />
      </button>
    
      </div>

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
        <div className="row align-items-strech">
          {characters.map((character) => (
            <div className=" bg-dark col-lg-3 col-6 d-flex py-2 " key={character.id}>
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
