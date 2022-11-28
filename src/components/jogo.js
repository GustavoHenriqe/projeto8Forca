export default function jogo(props) {
    
    return (
        <div className="jogo-class">
            <img data-test="game-image" className="forca-img" src={props.image}></img>
            <div className="jogo-class-interative">
                <button data-test="choose-word" onClick={props.buttonRandom} className="button-word">
                    Escolher Palavra
                </button>
                <div data-answer={props.words} data-test="word" id="latters" className="password">
                    {props.words.split("").map(e => <span id={e.toUpperCase()} >_</span>)}
                </div>
            </div>
        </div>
    )
}