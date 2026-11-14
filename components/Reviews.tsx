const reviews = [
  {
    quote:
      'A beautiful and touching series that helps children understand their emotions. These books have become bedtime favorites in our house.',
    attribution: 'Sarah M., Parent',
  },
  {
    quote:
      'The messages in these books are so important for families. They teach empathy, understanding, and the value of truly listening to one another.',
    attribution: 'Michael T., Grandparent',
  },
  {
    quote:
      'My children love the character of Noelle and the gentle way these stories help them explore their feelings. Highly recommended!',
    attribution: 'Jennifer L., Educator',
  },
];

export default function Reviews() {
  return (
    <section className="bg-sky/50 py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="section-heading">Reviews</h2>
          <p className="section-lead">Kind words from families who read with us.</p>
        </div>

        <div className="space-y-12">
          {reviews.map((review) => (
            <blockquote key={review.attribution} className="text-center">
              <p className="font-display text-2xl font-medium leading-snug text-ink text-balance md:text-3xl">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-wider text-whisper-blue-deep">
                — {review.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
