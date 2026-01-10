import Hero from '@/components/Hero';
import BookShowcase from '@/components/BookShowcase';
import OurStory from '@/components/OurStory';
import Reviews from '@/components/Reviews';
import EmailSignup from '@/components/EmailSignup';

export default function Home() {
  return (
    <div>
      <Hero />
      <BookShowcase />
      <OurStory />
      <Reviews />
      <EmailSignup />
    </div>
  );
}
