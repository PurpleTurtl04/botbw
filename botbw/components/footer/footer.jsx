'use client';
import { usePathname } from 'next/navigation';

import FooterMain from '@/components/footer/footer-main';
import FooterAlt from '@/components/footer/footer-alt';

export default function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <FooterAlt /> : <FooterMain />;
}
