import { useState } from 'react';

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
        setValue(e.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === KEY_ENTER) handleClick();
    };

    return (
        <div onKeyDown={handleKeyDown}>
            <input type='text' maxLength={1} value={value} onChange={handleChange} />
            <button type='button' onClick={handleClick}>
                Enviar
            </button>
        </div>
    );
};

export default Input;

