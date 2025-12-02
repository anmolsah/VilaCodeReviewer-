import React, { useState, useEffect } from "react";
import { ChevronRight, Code2, Sparkles, Sun, Moon } from "lucide-react";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react";

const App = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    prism.highlightAll();
  }, [code, review]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleReview = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/ai/get-review`,
        {
          code,
        }
      );
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please try again.");
    }
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800"
      }`}
    >
      <header
        className={`border-b backdrop-blur-sm ${
          darkMode
            ? "border-gray-700 bg-gray-900/50"
            : "border-gray-200 bg-white/50"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2
                className={`h-8 w-8 ${
                  darkMode ? "text-blue-500" : "text-blue-600"
                }`}
              />
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                VilacodeReviewer
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`rounded-full p-2 transition-all ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div
            className={`rounded-lg p-4 shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Code Input
              </h2>
              <button
                onClick={handleReview}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 focus:ring-offset-gray-800"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-offset-white"
                } focus:ring-offset-2`}
              >
                <Sparkles className="h-4 w-4" />
                Review Code
              </button>
            </div>
            <div className="relative">
              <textarea
                className={`h-[calc(100vh-280px)] w-full rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-900 text-white placeholder-gray-400"
                    : "bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-200"
                }`}
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          <div
            className={`rounded-lg p-4 shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mb-4 flex items-center gap-2">
              <ChevronRight
                className={`h-10 w-10 ${
                  darkMode ? "text-blue-500" : "text-blue-600"
                }`}
              />
              <h2
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Review Output
              </h2>
            </div>
            <div
              className={`h-[calc(100vh-280px)] rounded-lg p-4 overflow-auto ${
                darkMode
                  ? "bg-gray-900 text-gray-300"
                  : "bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              <div
                className={`prose max-w-none whitespace-pre-wrap ${
                  darkMode ? "prose-invert text-gray-300" : "text-gray-700"
                }`}
              >
                {loading ? (
                  <div className="flex h-full items-center justify-center">
                    <Loader2
                      className={`h-8 w-8 animate-spin ${
                        darkMode ? "text-blue-500" : "text-blue-600"
                      }`}
                    />
                  </div>
                ) : review ? (
                  <ReactMarkdown className="leading-relaxed">
                    {review}
                  </ReactMarkdown>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className={darkMode ? "text-gray-500" : "text-gray-400"}>
                      No review available.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
