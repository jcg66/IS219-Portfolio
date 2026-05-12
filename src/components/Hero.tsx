import React from 'react';

const Hero = () => {
  return (
    <section className="w-full max-w-5xl text-left">
      <h1 className="text-4xl md:text-6xl font-bold">
        [Your Name] <span className="text-[var(--accent-color)]">//</span> AI-Forward Systems Engineer
      </h1>
      <p className="mt-4 text-lg md:text-xl font-mono">
        Specializing in automated threat intelligence and RAG-based orchestration. I build high-performance security tools optimized for resource-constrained environments.
      </p>
      <div className="mt-6 font-mono text-sm md:text-base">
        <div className="flex items-center">
          <span className="text-[var(--accent-color)] mr-2">◆</span>
          <span>Focus: AI/Cybersecurity Fusion</span>
        </div>
        <div className="flex items-center">
          <span className="text-[var(--accent-color)] mr-2">◆</span>
          <span>Architecture: Vector DBs, RAG, Local Inference</span>
        </div>
        <div className="flex items-center">
          <span className="text-[var(--accent-color)] mr-2">◆</span>
          <span>Efficiency Metric: Optimized for 8GB RAM deployments</span>
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[var(--border-color)] rounded-md hover:bg-[var(--border-color)] transition-colors">
          View GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[var(--border-color)] rounded-md hover:bg-[var(--border-color)] transition-colors">
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
