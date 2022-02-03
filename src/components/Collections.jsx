import { useState } from "react";

const PRIDE_AND_PREJUDICE = ["Chapter 1", "Chapter 2", "Chapter 3"];

const CUSTOM_TEXTS = ["Text 1", "Text 2"];

const Collections = () => {
  const collectionsClasses =
    "fixed top-0 left-0 h-screen m-0 w-80 ml-16 py-5 bg-gray-800";
  const titleClasses = "text-gray-400 ml-4 text-xl mb-4";

  return (
    <section className={collectionsClasses}>
      <h5 className={titleClasses}>📚 Collections 📚</h5>

      <Books />
    </section>
  );
};

export default Collections;

const Books = () => {
  const detailsClasses =
    "open:text-yellow-500 text-gray-500 transition ease-in-out delay-150 open:text-xl text-lg";
  const summaryClasses =
    "hover:text-white ml-5 font-semibold transition ease-in-out delay-100 cursor-pointer";
  const liClasses =
    "text-gray-500 hover:text-yellow-500 hover:text-base ml-10 leading-6 text-sm transition ease-in-out delay-100 cursor-pointer";

  return (
    <details open={PRIDE_AND_PREJUDICE} className={detailsClasses}>
      <summary className={summaryClasses}>Pride & Prejudice 📖</summary>

      <ul>
        {PRIDE_AND_PREJUDICE.map((c) => (
          <li key={c} className={liClasses}>
            # {c}
          </li>
        ))}
      </ul>
    </details>
  );
};
