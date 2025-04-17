import './App.css' // Keep or replace with index.css depending on setup
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moduleCategories } from './data/modules.tsx';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import BonusSection from './components/BonusSection';
import Footer from './components/Footer';
import ScoreCalculator from './components/ScoreCalculator';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [showCopied, setShowCopied] = useState(false);

  // Initialize selected modules from URL params
  useEffect(() => {
    const modulesParam = searchParams.get('modules');
    if (modulesParam) {
      // Decode the module titles from URL
      const decodedModules = modulesParam.split(',').map(module => decodeURIComponent(module));
      setSelectedModules(decodedModules);
    }
  }, [searchParams]);

  // Update URL when selected modules change
  useEffect(() => {
    if (selectedModules.length > 0) {
      // Encode the module titles for URL
      const encodedModules = selectedModules.map(module => encodeURIComponent(module)).join(',');
      setSearchParams({ modules: encodedModules });
    } else {
      setSearchParams({});
    }
  }, [selectedModules, setSearchParams]);

  const toggleModule = (moduleTitle: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleTitle)
        ? prev.filter(m => m !== moduleTitle)
        : [...prev, moduleTitle]
    );
  };

  const deselectAll = () => {
    setSelectedModules([]);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  // Get all modules flattened
  const allModules = moduleCategories.flatMap(category => 
    category.modules.map(module => ({
      ...module,
      category: category.title
    }))
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-inter">
      <div className="container mx-auto px-4 py-4">
        <Header />
        
        {/* Score Calculator */}
        <ScoreCalculator selectedModules={selectedModules} />
        
        {/* All Modules List */}
        <div className="mb-4 p-2 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">All Modules</h2>
            {selectedModules.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={deselectAll}
                  className="text-sm text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                >
                  Deselect All
                </button>
                <button
                  onClick={copyUrl}
                  className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {showCopied ? 'Copied!' : 'Share'}
                </button>
              </div>
            )}
          </div>
          <div className="space-y-1 grid sm:grid-cols-2 gap-2">
            {allModules.map((module) => (
              <div 
                key={module.title}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedModules.includes(module.title)
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50 border border-gray-200'
                }`}
                onClick={() => toggleModule(module.title)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        module.type === 'Major' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {module.type}
                      </span>
                      <p className="text-sm font-medium">{module.title}</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedModules.includes(module.title)
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedModules.includes(module.title) && (
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <main>
          {/* <MandatorySection /> */}
          <ModulesSection 
            selectedModules={selectedModules}
            onModuleToggle={toggleModule}
          />
          <BonusSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
