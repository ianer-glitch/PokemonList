import { MouseEventHandler } from "react";

export default interface IButton{
    text : string,
    onClick:  MouseEventHandler<HTMLButtonElement>

}