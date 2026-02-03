"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
id: string;
label: string;
content: React.ReactNode;
}

interface AnimatedTabsProps {
tabs?: Tab[];
defaultTab?: string;
className?: string;
}

const defaultTabs: Tab[] = [
{
  id: "tab1",
  label: "Protocol Crisis",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
      <img
        src="/images/gameJam.png"
        className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
      />

      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Protocol Crisis
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          A Unity 3D game jam project built with C#. Survive enemy waves while repairing your ship to keep it operational.
        </p>
      </div>
    </div>
  ),
},
{
  id: "tab2",
  label: "Thesaurus",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
      <img
        src="/images/Thesaurus.png"
        alt="Thesaurus"
        className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
      />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Thesaurus
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          A WebGL game built with simple HTML, CSS, and JavaScript. Navigate through a maze to find the hidden treasure.
        </p>
      </div>
    </div>
  ),
},
{
  id: "tab3",
  label: "Projet Petites Puces",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
      <img
        src="/images/petitespuces.png"
        alt="Projet Petites Puces"
        className="rounded-lg w-full h-60 object-cover mt-0 !m-0  shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
      />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
          Projet Petites Puces
        </h2>
        <p className="text-sm text-gray-200 mt-0">
          A React and ASP.NET based project that focuses on creating a marketplace with a SQL database.
        </p>
      </div>
    </div>
  ),
},
];

const AnimatedTabs = ({
tabs = defaultTabs,
defaultTab,
className,
}: AnimatedTabsProps) => {
const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

if (!tabs?.length) return null;

return (
  <div className={cn("w-full max-w-4xl flex flex-col gap-y-2", className)}>
    <div className="hidden md:flex gap-2 flex-wrap bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-2 rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "relative px-6 py-3 text-lg font-medium rounded-lg text-white outline-none transition-colors"
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-[#111111d1] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm !rounded-lg"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>

    <div className="hidden md:block p-6 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white bg-opacity-50 backdrop-blur-sm rounded-xl border min-h-96 h-full">
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{
                opacity: 0,
                scale: 0.95,
                x: -10,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
                type: "spring",
              }}
            >
              {tab.content}
            </motion.div>
          )
      )}
    </div>

    <div className="md:hidden flex flex-col gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="p-4 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white bg-opacity-50 backdrop-blur-sm rounded-xl border text-left"
        >
          <h3 className="text-lg font-bold">{tab.label}</h3>
        </button>
      ))}
    </div>

    <div className="md:hidden mt-4 p-4 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white bg-opacity-50 backdrop-blur-sm rounded-xl border">
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{
                opacity: 0,
                scale: 0.95,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
              }}
            >
              {tab.content}
            </motion.div>
          )
      )}
    </div>
  </div>
);
};

export { AnimatedTabs };
