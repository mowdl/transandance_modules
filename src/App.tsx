import './App.css' // Keep or replace with index.css depending on setup
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moduleCategories } from './data/modules.tsx';
import Header from './components/Header';
import MandatorySection from './components/MandatorySection';
import ModulesSection from './components/ModulesSection';
import BonusSection from './components/BonusSection';
import Footer from './components/Footer';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

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
        
        {/* All Modules List */}
        <div className="mb-4 p-2 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">All Modules</h2>
            {selectedModules.length > 0 && (
              <button
                onClick={deselectAll}
                className="text-sm text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
              >
                Deselect All
              </button>
            )}
          </div>
          <div className="space-y-1 grid grid-cols-2 gap-2">
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
                      <p className="text-sm font-medium">{module.title}</p>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        module.type === 'Major' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {module.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{module.category}</p>
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
