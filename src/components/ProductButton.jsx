
export default function ProductButton({text,sizeCss}) {
    let buttonCss="btn product-btn ";
    if(sizeCss){
        buttonCss +=sizeCss
    }

  return (
    <button className={buttonCss}>{text}</button>
  )
}
