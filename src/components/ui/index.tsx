import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from '../ui/style.module.scss';

// Определение схемы валидации с помощью zod
const schema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
});

type FormData = z.infer<typeof schema>;

interface DialogModalProps {
    selectedName: string | null;
}

const DialogModal: React.FC<DialogModalProps> = ({ selectedName }) => {
    // Настройка react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Submitted email:', data.email);
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={`${styles.Button}`}>Get VPN</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.Overlay} />
                <Dialog.Content className={styles.Content}>
                    <Dialog.Title className={styles.Title}>Your name</Dialog.Title>
                    <Dialog.Description className={styles.Description}>
                        {selectedName || 'No name selected'}
                    </Dialog.Description>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className={styles.Fieldset}>
                            <input
                                className={`${styles.Input} ${errors.email ? styles.InputError : ''}`}
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder="Enter your email"
                            />
                        </fieldset>
                        <Dialog.Description>
                            {errors.email && <p className={styles.ErrorText}>{errors.email.message}</p>}
                        </Dialog.Description>
                        <Dialog.Description className={styles.Secure}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path
                                        d="M10.9851 7.5V5.5V4C10.9851 2.34315 9.64194 1 7.98509 1H7.39404C5.73719 1 4.39404 2.34315 4.39404 4V5.5V7.5"
                                        stroke="#8C8C8C" strokeWidth="2"/>
                                    <rect x="1" y="7" width="13.3791" height="9" rx="2" stroke="#646464" strokeWidth="2"/>
                                    <path d="M7.68945 10V12" stroke="#8C8C8C" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </g>
                            </svg>
                            Your information is 100% secure. We don’t share your personal information.
                        </Dialog.Description>
                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                            <button type="submit" className={`${styles.Button}`}>Continue</button>
                        </div>
                    </form>
                    <Dialog.Close asChild>
                        <button className={styles.IconButton} aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogModal;
