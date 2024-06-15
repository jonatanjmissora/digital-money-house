
import React, { useState } from 'react'
import SVGCheckbox from '../../UI/SVGCheckbox';
import SVGCheckboxFill from '../../UI/SVGCheckboxFill';
type CardType = {
    id: number;
    card_number: string;
  }
export const CardRow = ({ card, actualCardId, changeCardId }: { card: CardType }) => {

    const { id, card_number } = card
    
    return (
        <div 
            className='tracking-normal flex gap-4 justify-between items-center border-b border-black py-2 opacity-75 text-sm'
            onClick={() => changeCardId(id)}
            >
            <div className='flex justify-between items-center gap-5'>
                <span className='bg-primary rounded-full w-8 aspect-square'></span>
                <span>Terminada en {card_number}</span>
            </div>
            
            {actualCardId === id ? 
                <SVGCheckboxFill className='text-primary' /> :
                <SVGCheckbox />
            }
        </div>
    )
    }