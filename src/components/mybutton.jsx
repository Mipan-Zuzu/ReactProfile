const Mybutton = (props) => {
    const tag = props.tag
    return (
        <button onClick={() => props.clicked()} type="button">Button {tag}</button>
    )
}

export default Mybutton