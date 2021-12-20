import React, { FC } from 'react';
import { useState } from 'react';
export enum CardVarian {
    outLined = "outLined",
    primary = "primary"
}
interface CardProps {
    width?: string;
    height?: string;
    variant: CardVarian;
  
}
const Card: FC<CardProps> = ({
        width, 
        height, 
        variant, 
        children,
        
    }) => {
        const [state, setState] = useState(0)
    return (
        <div style={{width,height, border: variant === CardVarian.outLined ?  
        "1px solid gray " : "none", 
        background: variant === CardVarian.primary ? "lightgray" : "none"}}
      
        >
            {children}
        </div>
    );
};

export default Card;