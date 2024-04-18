import React from "react";
import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const getStarted = () => {
    alert("Let's get started!");
    // Add further functionality here, such as navigating to a specific page
  };

  const githubLink = () => {
    window.open("https://github.com/AnukulPr1me/Visualizer", "_blank");
    // Replace the URL above with your actual GitHub repository URL
  };

  return (
    <div className="max-w-screen-xl mx-auto p-10 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
        Welcome to <span className="text-purple-600">Visualizer</span>
      </h1>
      <p className="text-lg text-gray-800 mb-8">
        You can visualize pathfinding and sorting algorithms
      </p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={getStarted}>
          Get Started
        </Button>
        <Button className="bg-gray-400 hover:bg-gray-500 text-gray-800" onClick={githubLink}>
          <FaGithub className="inline-block mr-2 text-xl" /> Source Code
        </Button>
      </div>
    </div>
  );
};

export default Home;
