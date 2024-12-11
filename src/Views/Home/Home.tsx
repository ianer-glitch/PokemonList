import { useState } from "react"
import Button from "../../components/atoms/Button/Button"
import PokemonList from "../../components/molecules/PokemonList/PokemonList"
import "./Home.css"

export default function Home(){
    const [pokemonSearch,setPokemonSearh] = useState('')
    const [shouldSearch,setShouldSearch] = useState(0)
  
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
    return(
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
        <Button onClick={handleSearch} text='Go!' />
        
        <PokemonList 
          shouldSearch={shouldSearch} 
          pokemonSearch={pokemonSearch}
        />
        
      </section>
    </div>
    )
}