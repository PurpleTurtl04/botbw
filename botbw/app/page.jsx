import Hero from '@/components/hero';

export const metadata = {
    title: 'My Landing Page',
    // Inject style tag to lock overflow for this route only
    other: {
        style: 'html, body { height: 100vh; overflow: hidden; }',
    },
};

export default function Home() {
    return (
        <div>
            <Hero />
        </div>
    );
}
