'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'G-4R4Y4W8KJW', {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}
