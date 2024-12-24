import style from "./Input_container.module.css"
function Input_container({displayValue}){
    return <input className={style.Header} type="text" value={displayValue}/>

}
export default Input_container;