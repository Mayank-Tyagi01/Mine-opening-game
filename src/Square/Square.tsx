
import './Square.css';
import goldIcon from '../assets/gold.png';
import bombIcon from '../assets/bomb.png';
import { useEffect, useState } from 'react';

function Square({ mine, setGameOver, gameOver, setScore }) {

    let [image, setImage] = useState(null);

    useEffect(() => {
        if (gameOver) {
            if (mine) {
                setImage(bombIcon);
            }
            else {
                setImage(goldIcon);
            }
        }
    }, [gameOver, mine])


    function clickHandler() {

        if(gameOver) return;

        if (!mine) {
            setScore((prevValue) => {
                return prevValue * 2;
            });
            setImage(goldIcon);
          
        } else {
            alert("You Loose The Game please reload to play again");
            setGameOver(true);
        }
    }

    return <>
        <div
            className='square-item'
        
            onClick={clickHandler}
        >
            {image && <img height={90} width={90} src={image} />}
        </div>
    </>
}

export default Square;