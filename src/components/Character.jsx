export function Character(character) {
  return (
    <div className="card card-body  py-1 text-center  bg-secondary">
      <h3 className="">{character.name}</h3>
      <img src={character.image} alt={character.name} className="img-fluid rounded-pill py-2" />
      <h5 className="">{character.status}</h5>
      <h5 className="">{`Origin: ${character.origin && character.origin.name}`}</h5>

    </div>
  );
}
export default Character;