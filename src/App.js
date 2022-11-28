"use strict";

import palavras from "./palavra";
import Jogo from "./components/jogo.js";
import Letra from "./components/Letras.js"
import {useState} from "react";
import ReactDOM from "react-dom/client";
import Chute from "./components/Chute";

export default function App() {
    const [word, setWord] = useState("")
    const [active, setActive] = useState(true)
    const [error, setError] = useState(0)
    const array_forca = ["./assets/forca0.png", "./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png", "./assets/forca6.png"]
    const [Image_forca, setImage_forca] =  useState(array_forca[error])
    const [contage, setContage] = useState("")

    function buttonRandom () {
        setWord(palavras[ Math.floor(Math.random() * palavras.length) ])
        setActive(false)
    }

    function clickButton (button) {

        function validadeErrorOrSucess(validateLatters, word, button, setError, error, setImage_forca, array_forca) {

            if (validateLatters(word, button) == false) {
                button.target.disabled = true;
                setError(error + 1);
                setImage_forca(array_forca[error]);
        
            } else {
                button.target.disabled = true;
                document.querySelectorAll(`#${button.target.innerHTML}`).forEach(e => {
                    setContage(contage + button.target.textContent)
                    ReactDOM.createRoot(e).render(<span>{button.target.textContent}</span>);
                });
            }
        }

        function validateLatters(word, button) {

            return word.includes((button.target.textContent).toLowerCase());

        }
        
        validadeErrorOrSucess(validateLatters, word, button, setError, error, setImage_forca, array_forca);
        if(error == 6){
            
        }
        
       
    }

    function chutingWord() {
        if (document.querySelector("#inputChut").value == word){

            ReactDOM.createRoot(document.querySelector("#latters"))
            .render(word.split("").map(e => <span>{e}</span>))

        }else{
            setError(6)
            setImage_forca(array_forca[error])
            alert("Voce Perdeu")
        }
    }

    return (
        <>
            <Jogo image={Image_forca} buttonRandom={buttonRandom} words={word} />
            <Letra buttonActive={active} clickButton={clickButton} />
            <Chute chutingWord={chutingWord} />
        </>
    )
}


