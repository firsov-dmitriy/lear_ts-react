import React, { FC, useState } from 'react';

const EventsExapmle: FC = () => {
    const [value, setValue] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
       setValue( e.target.value)
       e.target.value = ' '
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        
    }
     return (
        <div>
            <input value={value} type={"text"} onChange={changeHandler} />
            <button onClick={clickHandler}>dasfa</button>
        </div>
    );
};

export default EventsExapmle;