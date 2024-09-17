'use client';

import React from 'react';
import {cn} from '@/lib/utils';
import {useButtonStore} from '../../../store/button-store';
import styles from '../styles/ButtonBlock.module.scss';

interface Props {
    className?: string;
}

const cart = [{id: 1, name: 'Get VPN'}];

export const ButtonBlock: React.FC<Props> = ({className}) => {
    const categoryActiveId = useButtonStore((state) => state.activeId);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className={cn(styles.buttonBlock, className)}>
            {cart.map(({name, id}, index) => (
                <a
                    className={cn(
                        styles.button,
                        categoryActiveId === id && styles.active
                    )}
                    href={`#${name}`}
                    key={index}
                    onClick={(event) => handleClick(event, 'chooseName')}
                >
                    {name}
                </a>
            ))}
        </div>
    );
};
