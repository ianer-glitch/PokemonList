

export default interface IInputText{
    name:string,
    value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>
    onKeyDown:React.KeyboardEventHandler<HTMLInputElement>

}