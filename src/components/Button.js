const Button = (props) =>{

    const {text, action, active} = props

    return(
        <button onClick={action} disabled={!active}>{text}</button>
    )

}

export default Button

