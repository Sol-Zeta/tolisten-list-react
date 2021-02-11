const Input = (props) => {
    const { content, getValue } = props
    return ( 
    <input type="text" onChange={(e) => getValue(e)} value={content} placeholder="Type your song..." /> 
    );
}
 
export default Input;
