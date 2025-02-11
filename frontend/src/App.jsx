import React, { useState, useEffect } from "react";
import { ChevronRight, Code2, Sparkles } from "lucide-react";
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

  useEffect(() => {
    prism.highlightAll();
  }, [code, review]);

  const handleReview = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:9876/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">VilacodeReviewer</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-800 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Code Input</h2>
              <button
                onClick={handleReview}
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Sparkles className="h-4 w-4" />
                Review Code
              </button>
            </div>
            <div className="relative">
              <textarea
                className="h-[calc(100vh-280px)] w-full rounded-lg bg-gray-900 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-4 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <ChevronRight className="h-10 w-10 text-blue-500" />
              <h2 className="text-lg font-semibold text-white">
                Review Output
              </h2>
            </div>
            <div className="h-[calc(100vh-280px)] rounded-lg bg-gray-900 p-4 overflow-auto text-gray-300">
              <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-wrap">
                {loading ? (
                  <div className="flex h-full items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                  </div>
                ) : review ? (
                  <ReactMarkdown className="leading-relaxed text-gray-300">
                    {review}
                  </ReactMarkdown>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-gray-500">No review available.</p>
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
