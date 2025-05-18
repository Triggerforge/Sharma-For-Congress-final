'use client';

import { useState, useEffect, useRef } from 'react';
import issues from '~/app/_data/issuesData';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function IssuesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasUserClicked, setHasUserClicked] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeIssue = issues[activeIndex];

  useEffect(() => {
    if (hasUserClicked && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeIndex, hasUserClicked]);

  const changeIssue = (index: number) => {
    setHasUserClicked(true);
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 300); // Duration of fade-out
  };

  return (
    <section className="min-h-screen w-full">
      <div className="bg-[url('/nc-flag.jpg')] bg-center bg-cover h-[40vh] flex items-center justify-center">
        <h1 className="text-5xl font-heading text-white px-8 py-4 rounded">Solutions</h1>
      </div>

      <div className="w-full px-4 py-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-4 sm:flex-nowrap md:grid md:grid-cols-4 lg:grid-cols-5 justify-start">
          {issues.map((issue, idx) => (
            <div
              key={issue.key}
              className={`font-heading relative min-w-[240px] md:w-auto h-20 font-bold uppercase flex items-center justify-center transition-all duration-300 cursor-pointer rounded overflow-hidden ${
                idx === activeIndex
                  ? 'bg-indigo-950 text-white border-b-4 border-red-600'
                  : 'bg-white text-indigo-950 hover:bg-indigo-950 hover:text-white'
              }`}
              onClick={() => changeIssue(idx)}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${
                  idx === activeIndex || isHovered === idx ? 'opacity-30' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${issue.image})` }}
              />
              <h3 className="z-10 relative text-center px-2">
                {issue.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={contentRef}
        className={`bg-indigo-950 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 transition-opacity duration-500 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex-shrink-0 w-full md:w-1/2 max-h-[400px] overflow-hidden rounded-lg">
          <img
            src={activeIssue?.image}
            alt={activeIssue?.title}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-heading mb-4 flex items-center gap-2">
            {activeIssue?.title}
          </h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {activeIssue?.content}
          </p>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center bg-indigo-950 py-6 px-8">
        <button
          className="text-white"
          onClick={() => changeIssue((activeIndex - 1 + issues.length) % issues.length)}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        <button
          className="text-white"
          onClick={() => changeIssue((activeIndex + 1) % issues.length)}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
