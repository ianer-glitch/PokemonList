import IPokemonItem from "./PokemonItemProps";
import './PokemonItem.css'


export default function PokemonItem(props : IPokemonItem) {
    return (
    <li className="pokemon-list--item">
        <p>{props.name}</p>
        <img src={props.img} alt={props.name}></img>
    </li>)
}

