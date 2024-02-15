export function Character(character) {
    return (
      <div className="card card-body  py-1 text-center  bg-secondary">
        <h5 className=" badge text-bg-light">{character.name}</h5>
        <img src={character.image} alt={character.name} className="img-fluid rounded-pill py-2" />        
        <h5 className="badge  text-bg-light">{character.status}</h5>
        <p className="badge  text-bg-light">{`Origin: ${character.origin && character.origin.name}`}</p>
       
       
       
       
       
      </div>
    );
  }
  export default Character;