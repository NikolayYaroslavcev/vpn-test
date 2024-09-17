"use client"

import React, {useState} from 'react';

import styles from '../styles/Home.module.scss';
import {useQuery} from "react-query";
import {fetchUsers} from "@/app/api/user-api";
import LoadingSkeleton from "@/components/shared/loading-skeleton";
import DialogModal from "@/components/ui";

interface User {
    name: {
        first: string;
        last: string;
    };
}

interface Data {
    results: User[];
}

export const FormChooseName: React.FC = () => {
    const { isLoading, error, data } = useQuery<Data>(
        'repoData',
        fetchUsers
    );

    const [selectedName, setSelectedName] = useState<string | null>(null);

    if (isLoading) return <LoadingSkeleton />;
    if (error) return <p>Error loading data</p>;

    const users = data?.results.slice(0, 3) || [];

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(event.target.value);
    };

    return (
        <div className={styles.chooseWrap}>
            <p id="chooseName" className={styles.chooseTitle}>
                Choose <span>your Name</span>
            </p>
            <div className={styles.chooseBlocks}>
                <form className={styles.chooseForm}>
                    {users.map((user, index) => (
                        <label key={index} className={styles.accountOption}>
                            <input
                                type="radio"
                                name="account_type"
                                value={`${user.name.first} ${user.name.last}`}
                                className={styles.accountInput}
                                onChange={handleNameChange}
                            />
                            <span className={styles.accountText}>
                                {user.name.first} {user.name.last}
                            </span>
                        </label>
                    ))}
                </form>
            </div>
            <DialogModal selectedName={selectedName} />
        </div>
    );
};
