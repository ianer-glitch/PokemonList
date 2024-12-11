import IButton from "./IButton";
import "./Button.css"

export default function Button(props : IButton){
    return(
        <button 
            className="button-default" 
            type="button" 
            onClick={props.onClick}>
                {props.text}
        </button>
    )
} 