const Day2Meal1 = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>1 salmon fillet (about 6 oz)</li>
          <li>1 cup cherry tomatoes, halved</li>
          <li>1 cup zucchini, sliced</li>
          <li>1/2 cup red onion, sliced</li>
          <li>1 tablespoon olive oil</li>
          <li>1/2 teaspoon dried oregano</li>
          <li>1/2 teaspoon dried basil</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>Salt and pepper to taste</li>
          <li>1/2 lemon, sliced</li>
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-600">
          <li>Preheat oven to 400°F (200°C).</li>
          <li>
            In a large oven-safe pan, add cherry tomatoes, zucchini, and red
            onion. Drizzle with olive oil and sprinkle with oregano, basil,
            garlic powder, salt, and pepper. Toss to coat.
          </li>
          <li>
            Place the salmon fillet on top of the vegetables. Season the salmon
            with a little more salt, pepper, and a few lemon slices.
          </li>
          <li>
            Transfer the pan to the oven and bake for 15-20 minutes, or until
            the salmon is cooked through and flakes easily with a fork.
          </li>
          <li>Serve hot with the roasted vegetables.</li>
        </ol>
      </div>
    </div>
  );
};

export default Day2Meal1;
