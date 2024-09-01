const Day2Meal2 = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>1 cup dry lentils (green or brown), rinsed</li>
          <li>1 tablespoon olive oil</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>2 carrots, diced</li>
          <li>2 celery stalks, diced</li>
          <li>1 can (14.5 oz) diced tomatoes</li>
          <li>4 cups low-sodium chicken or vegetable broth</li>
          <li>1 teaspoon cumin</li>
          <li>1 teaspoon paprika</li>
          <li>1/2 teaspoon turmeric</li>
          <li>1/2 teaspoon black pepper</li>
          <li>Salt to taste</li>
          <li>1/2 cup chopped spinach or kale (optional)</li>
          <li>Juice of 1/2 lemon</li>
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-600">
          <li>In a large pot, heat olive oil over medium heat.</li>
          <li>
            Add onion, garlic, carrots, and celery. Sauté for 5-7 minutes until
            the vegetables are softened.
          </li>
          <li>
            Add lentils, diced tomatoes, broth, cumin, paprika, turmeric, and
            black pepper to the pot. Stir well.
          </li>
          <li>
            Bring the mixture to a boil, then reduce heat to low and let it
            simmer for about 30-35 minutes until the lentils are tender.
          </li>
          <li>
            Add spinach or kale (if using) and cook for an additional 5 minutes
            until wilted.
          </li>
          <li>
            Season with salt to taste and finish with a squeeze of lemon juice
            for freshness.
          </li>
          <li>Serve hot.</li>
        </ol>
      </div>
    </div>
  );
};

export default Day2Meal2;
