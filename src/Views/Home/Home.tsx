import { useState } from "react"
import Button from "../../components/atoms/Button/Button"
import PokemonList from "../../components/molecules/PokemonList/PokemonList"
import "./Home.css"
import InputText from "../../components/atoms/InputText/InputText"

export default function Home(){
    const [pokemonSearchForm,setPokemonSearhForm] = useState({searchText:''})
    const [shouldSearch,setShouldSearch] = useState(0)

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name,value} = event.target
      Object.keys(pokemonSearchForm).forEach((key) => {
        if (name === key) {
          setPokemonSearhForm((old) => {
            return {
              ...old,
              [key]: value,
            }
          })
        }
      })
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
          <InputText
            value={pokemonSearchForm.searchText} 
            onChange={handleFormChange}
            name="searchText"
            onKeyDown={handleKeyDown}
          />
          </fieldset>
        <Button onClick={handleSearch} text='Go!' />
        
        <PokemonList 
          shouldSearch={shouldSearch} 
          pokemonSearch={pokemonSearchForm.searchText}
        />
        
      </section>
    </div>
    )
}