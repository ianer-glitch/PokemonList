import IPokemonItem from "./PokemonItemProps";



export default function PokemonItem(props : IPokemonItem) {
    return (
    <li>
        {props.name}
        <img src={props.img} alt={props.name}></img>
    </li>)
}

