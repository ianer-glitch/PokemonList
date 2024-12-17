import { InputText as PrimeReactInputText } from 'primereact/inputtext';
import IInputText from './IInputText';
export default function InputText(props : IInputText){
    return(
        <PrimeReactInputText
            name={props.name}    
            value={props.value}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
        
        />
    )    
}