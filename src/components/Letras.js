
function Letra(props) {
    const latters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
       <div className="latters-board">
            {latters.map(a => <button 
            key={"board" + a.toUpperCase()} 
            disabled={props.buttonActive} 
            className="latters-button"
            onClick={props.clickButton}
            data-test="letter">{a.toUpperCase()}</button>)}
       </div>
    )
}

export default Letra