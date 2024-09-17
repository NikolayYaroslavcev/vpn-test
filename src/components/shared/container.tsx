import React from 'react';
import styles from '../styles/Container.module.scss'
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
