export default function Chute (props) {
    
    return (
        <div className="chuting">
            <label>Já sei qual é a palavra</label>
            <input id="inputChut" className="input-chuting"></input>
            <button onClick={props.chutingWord} className="button-chuting">
                Chutar
            </button>
        </div>
    )
}