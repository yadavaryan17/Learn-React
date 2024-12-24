import style from "./Button_container.module.css"
function Button_container({onClickButton}){

    let no_list = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']


    return  <div className={style.buttonContainer}>
        {no_list.map((list)=>

    <button key={list} className={style.button} onClick={()=>onClickButton(list)}>{list}</button>
        )}
      </div>

}
export default Button_container;