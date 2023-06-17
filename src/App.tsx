import { Chip, Container, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.scss';
import Input from './components/input/Input';
import PictureHanged from './components/picture-hanged/PictureHanged';
import Word from './components/word/Word';
import getWord from './components/word/WordList';

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
        <Container maxWidth='sm' className='container'>
            <Paper elevation={3} className='paper'>
                <PictureHanged fails={fails} />
                <p>
                    Letras Escritas:
                    {writeLetter && writeLetter.length > 0 && <Chip label={writeLetter} variant='outlined' />}
                </p>

                <Word wordSecret={wordSecret} writeLetters={writeLetter} winGame={winGame} />
                <Input onEmitValue={onEmitValue} />
            </Paper>
        </Container>
    );
}

export default App;

