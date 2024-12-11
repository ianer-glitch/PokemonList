import { useEffect, useState } from "react"
import PokemonItem from "../../atoms/PokemonItem/PokemonItem"
import IPokemonItem from "../../atoms/PokemonItem/PokemonItemProps"
import IPokemonList from "./IPokemonList"
import "./PokemonList.css"

export default function PokemonList(props : IPokemonList){
    const [pokemonArray,setPokemonArray] = useState([] as Array<IPokemonItem>)
    
    const pokemons = pokemonArray.map((m,index)=>
        <PokemonItem 
          img={m.img} 
          name={m.name}
          key={index}
          className="pokemon-list--item"
          />
      )
      
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
    
    
      useEffect(()=>{
          getPokemon(props.pokemonSearch)
      },[props.shouldSearch])

    return(
        <ul className="pokemon-list">
             {pokemons}
        </ul>
    )
}