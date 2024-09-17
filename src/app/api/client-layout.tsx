'use client';

import { QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import queryClient from "@/app/api/queryClient";

interface ClientLayoutProps {
    children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
