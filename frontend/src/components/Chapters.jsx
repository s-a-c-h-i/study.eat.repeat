import React, { useState } from "react";

const ChaptersPage = () => {
  const [chapters, setChapters] = useState([]);
  const [chapterName, setChapterName] = useState("");
 
      
  const handleAddChapter = (e) => {
    e.preventDefault();
    if (!chapterName.trim()) return;

    setChapters([
      ...chapters,
      { name: chapterName.trim(), completed: false },
    ]);
    setChapterName("");
  };

  const toggleChapter = (index) => {
    const updated = [...chapters];
    updated[index].completed = !updated[index].completed;
    setChapters(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📖 Chapter Tracker</h1>

      {/* Chapter Form */}
      <form
        onSubmit={handleAddChapter}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mb-8"
      >
        <label className="block text-gray-700 font-semibold mb-2">Add Chapter</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g. Introduction to DBMS"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </form>

      {/* Chapters List */}
      <div className="max-w-xl mx-auto">
        {chapters.length === 0 ? (
          <p className="text-center text-gray-500">No chapters added yet.</p>
        ) : (
          <ul className="space-y-4">
            {chapters.map((chapter, index) => (
              <li
                key={index}
                className="bg-white flex items-center justify-between px-4 py-3 rounded-lg shadow"
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={chapter.completed}
                    onChange={() => toggleChapter(index)}
                    className="accent-blue-600 h-5 w-5"
                  />
                  <span
                    className={`text-lg ${
                      chapter.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {chapter.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;
