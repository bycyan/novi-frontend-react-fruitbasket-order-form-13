import React, {useState} from "react";
import Emoji from "react-emoji-render";

function Fruit(props) {
    const [count, setCount] = useState(0);
    const handleTogglePlus = () => {
        setCount(count + 1)
    }
    const handleToggleMin = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
        <section>
            <article className={`fruitCounter ${count > 0 ? 'valid' : ''}`}>
                <Emoji>{props.icon}</Emoji>
                <h2>{props.name}</h2>
                <button type="button" onClick={handleToggleMin}>-</button>
                <span>{count}</span>
                <button type="button" onClick={handleTogglePlus}>+</button>
            </article>

        </section>
        </>
    )
}

export default Fruit;