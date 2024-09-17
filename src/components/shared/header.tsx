"use client";

import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import {ButtonBlock} from "@/components/shared/button-block";
import Image from "next/image";
import styles from '../styles/Header.module.scss';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {

    const handleLogoClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll to top
    };

    return (
        <header className={cn(styles.header, className)}>
            <div className={cn(styles.stickyHeader, className)}>
                <Container className={styles.containerHeader}>
                    <Image className={styles.ImgHeader} onClick={handleLogoClick} src='/logo.svg' alt='Logo' width={67}
                           height={30}/>
                    <ButtonBlock/>
                </Container>
            </div>
        </header>
    );
};
