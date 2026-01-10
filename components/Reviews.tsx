export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Reviews
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &ldquo;A beautiful and touching series that helps children understand their emotions. These books have become bedtime favorites in our house.&rdquo;
            </p>
            <p className="text-gray-600 font-semibold">— Sarah M., Parent</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &ldquo;The messages in these books are so important for families. They teach empathy, understanding, and the value of truly listening to one another.&rdquo;
            </p>
            <p className="text-gray-600 font-semibold">— Michael T., Grandparent</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &ldquo;My children love the character of Noelle and the gentle way these stories help them explore their feelings. Highly recommended!&rdquo;
            </p>
            <p className="text-gray-600 font-semibold">— Jennifer L., Educator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
