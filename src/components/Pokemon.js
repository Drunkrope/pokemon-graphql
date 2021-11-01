function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon-meta">
        <span>Max Hp: {pokemon.maxHP}</span>
        <span>Type: {pokemon.types}</span>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-attacks">
        {pokemon.attacks.special.slice(0, 2).map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
