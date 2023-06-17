import { useEffect, useState } from 'react';
import PictureHanged from './components/picture-hanged/PictureHanged';
import Word from './components/word/Word';
import getWord from './components/word/WordList';
import Input from './components/input/Input';

function App() {
    const [fails, setFails] = useState<number>(0);
    const [wordSecret, setWordSecret] = useState<string>('');
    const [writeLetter, setWriteLetter] = useState<Array<string>>([]);

    useEffect(() => {
        setWordSecret(getWord());
    }, []);

    const onEmitValue = (value: string): void => {
        if (fails === 5) {
            alert('Pierdes... reiniciando el juego.');
            resetGame();
            return;
        }
        const existLetterWrite = writeLetter.some((letter) => letter === value);
        if (!existLetterWrite) {
            setWriteLetter([...writeLetter, value]);
            const existLetterOnWordSecret = wordSecret.split('').some((letter) => letter === value);
            if (!existLetterOnWordSecret) setFails(fails + 1);
        } else {
            setFails(fails + 1);
        }
    };

    const winGame = (word: string): void => {
        alert(`Ganaste el juego, adivinaste la palabra: ${word}`);
        resetGame();
    };

    const resetGame = (): void => {
        setFails(0);
        setWriteLetter([]);
        setWordSecret(getWord());
    };

    return (
        <>
            <h1 className='text-3xl font-bold underline text-red-600'>Simple React Typescript Tailwind Sample</h1>
            <PictureHanged fails={fails} />
            <p>Letras Escritas: {writeLetter}</p>
            <Word wordSecret={wordSecret} writeLetters={writeLetter} winGame={winGame} />
            <Input onEmitValue={onEmitValue} />
        </>
    );
}

export default App;

