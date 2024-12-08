import IPokemonItem from "./PokemonItemProps";



export default function PokemonItem(props : IPokemonItem) {
    return (
    <li className={props.className}>
        <p>{props.name}</p>
        <img src={props.img} alt={props.name}></img>
    </li>)
}

