"use client";
import { useLenis } from '@/hooks/useLenis';
import React from 'react'
import { ScrollControls } from '../ui/ScrollControls';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function AppLayout({ children }: { children: React.ReactNode }) {
    useLenis();
    return (
        <div className="relative bg-background">
            <ScrollControls />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}


export default AppLayout