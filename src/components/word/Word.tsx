/* eslint-disable react-hooks/exhaustive-deps */
import { Chip } from '@mui/material';
import { useEffect, useState } from 'react';

type Props = {
    wordSecret?: string;
    writeLetters?: string[];
    winGame: (word: string) => void;
};
export const Word = (props: Props) => {
    const { wordSecret, writeLetters, winGame } = props;

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setValue('');
        generateWord();
    }, [wordSecret, writeLetters]);

    const generateWord = () => {
        const newWord = wordSecret?.split('')?.map((letter) => {
            return writeLetters?.includes(letter) ? letter : '_';
        });
        const wordClear = newWord?.join().replace(/,/g, '') || '';
        setValue(wordClear);
        if (wordClear && wordClear === wordSecret) {
            winGame(wordSecret);
        }
    };

    return <div>Palabra descubierta: {value && value.length > 0 && <Chip label={value} />}</div>;
};

export default Word;

