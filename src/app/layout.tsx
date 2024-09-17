import './globals.css'
import {Metadata} from "next";
import {Header} from "@/components/shared";
import { Poppins, Roboto, Inter } from 'next/font/google';
import ClientLayout from "@/app/api/client-layout";





const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});


const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});


const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'VPN | Main'
}


export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
        <body className={`${poppins.variable} ${roboto.variable} ${inter.variable}`}>
        <ClientLayout>
            <main className='min-h-screen'>
                <Header/>
                {children}
            </main>
        </ClientLayout>
        </body>
        </html>
    )
}
