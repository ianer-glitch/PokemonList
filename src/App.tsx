import { useEffect, useState } from 'react'
import './App.css'
import PokemonItem from './components/PokemonItem/PokemonItem'
import IPokemonItem from './components/PokemonItem/PokemonItemProps'

function App() {
  const [pokemonSearch,setPokemonSearh] = useState('ditto')
  const [shouldSearch,setShouldSearch] = useState(0)
  const [pokemonArray,setPokemonArray] = useState([] as Array<IPokemonItem>)

  const getPokemon = async (poke : string ) =>{
    if(poke){
      const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
      const r = await fetch(url)  
      const rJson = await r.json() 
      const name = rJson.name
      const img = rJson.sprites.front_default
      
      setPokemonArray(oldVal => [
        ...oldVal,
        {
          name: name,
          img:img
        } as IPokemonItem
      ])
    }
  }

  const pokemons = pokemonArray.map((m,index)=>
    <PokemonItem 
      img={m.img} 
      name={m.name}
      key={index}
      className="pokemon-list--item"
      />
  )


  useEffect(()=>{
      getPokemon(pokemonSearch)
  },[shouldSearch])

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setPokemonSearh(event.target.value)
  }

  const handleSearch = () =>{
    setShouldSearch(old => old + 1)
    
  }

  const handleKeyDown = (event : React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      handleSearch()
    }

  }

  return (
    <div className="pokemon-container">
      <section className="pokemon-form">
        <h1>Search for a Pokemon!</h1>
        <fieldset>
          <input 
            value={pokemonSearch} 
            type='text'
            onChange={handleInputChange}
            name="pokemonSearch"
            onKeyDown={handleKeyDown}
            >
            </input>
        </fieldset>
        <button type="button" onClick={handleSearch}>Go!</button>
        
        <ul className="pokemon-list">
          {pokemons}
        </ul>
      </section>
    </div>
  )
}

export default App
