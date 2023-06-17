import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './Input.scss';

const KEY_ENTER = 'Enter';

type Props = {
    onEmitValue: (value: string) => void;
};
export const Input = (props: Props) => {
    const [value, setValue] = useState<string>('');
    const { onEmitValue } = props;

    const handleClick = () => {
        onEmitValue(value);
        setValue('');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-z]+$/;
        if (!regex.test(e.target.value)) return;

        if (e.target.value.length > 1) {
            const lastValue = e.target.value.split('')[e.target.value.split('').length - 1];
            setValue(lastValue);
        } else {
            setValue(e.target.value);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === KEY_ENTER) handleClick();
    };

    return (
        <div onKeyDown={handleKeyDown} className='containerInput'>
            <TextField id='outlined-basic' label='Letra' variant='outlined' value={value} onChange={handleChange} />
            <Button variant='contained' onClick={handleClick}>
                Enviar
            </Button>
        </div>
    );
};

export default Input;

