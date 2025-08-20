
import React, { useState, useMemo, useCallback, useEffect } from 'react';

// --- Helper Icons ---
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
);

const PlusCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
);

const Trash2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
);


// --- Initial Data ---
const initialConfig = {
  "909310000": {
    "JobTypeName": "Tax - 1040 Individual",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.UpdateFederalBalances": true,
    "GOS.RegenerateGoSDRL": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "GOS.UpdateFederalBalances": false,
        "GOS.RegenerateGoSDRL": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790000": {
    "JobTypeName": "1040-Taxpayer Abroad",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.UpdateFederalBalances": true,
    "GOS.RegenerateGoSDRL": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "GOS.UpdateFederalBalances": false,
        "GOS.RegenerateGoSDRL": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790001": {
    "JobTypeName": "Tax - 1040 NR NonResident",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.UpdateFederalBalances": true,
    "GOS.RegenerateGoSDRL": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "GOS.UpdateFederalBalances": false,
        "GOS.RegenerateGoSDRL": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "909310001": {
    "JobTypeName": "Tax - 1120 Corporation",
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "909310002": {
    "JobTypeName": "Tax - 1120 S Corporation",
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "909310003": {
    "JobTypeName": "1120 Estimates",
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "909310004": {
    "JobTypeName": "1120H US Income T/R Home",
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790002": {
    "JobTypeName": "Tax - 1041 Fiduciary",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790003": {
    "JobTypeName": "Tax - 1065 Partnership",
    "Box.LinkValidation": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790004": {
    "JobTypeName": "Tax - 5500 Retirement",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.UpdateFederalBalances": true,
    "GOS.RegenerateGoSDRL": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "GOS.UpdateFederalBalances": false,
        "GOS.RegenerateGoSDRL": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790005": {
    "JobTypeName": "Tax - 709 Gift Tax",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  },
  "875790006": {
    "JobTypeName": "Tax - 990 Tax Exempt",
    "Sureprep.Binder": true,
    "Sureprep.Dreamworkpapers": true,
    "Sureprep.UploadedDocumentsCount": true,
    "Box.LinkValidation": true,
    "Box.WorkapaperTemplate": true,
    "Pe.NicheToXcm": true,
    "GOS.UpdateDeliverablesStatesResidency": true,
    "GOS.UpdateDiagnostics": true,
    "GOS.RegenerateGoSEfile": true,
    "Email.EfileConditionallyAccepted": true,
    "Email.EfileRejectedReminder": true,
    "Locations": {
      "875790027": {
        "LocationNameText": "Gateway",
        "Email.EfileAcceptedReminder": true
      },
      "875790032": {
        "LocationNameText": "Nashville",
        "Sureprep.Binder": false,
        "Sureprep.Dreamworkpapers": false,
        "Sureprep.UploadedDocumentsCount": false,
        "Box.LinkValidation": false,
        "GOS.UpdateDeliverablesStatesResidency": false,
        "GOS.UpdateDiagnostics": false,
        "Email.EfileConditionallyAccepted": false,
        "Email.EfileRejectedReminder": false
      }
    }
  }
};

const locationMap = {
  '875790027': 'Gateway',
  '875790032': 'Nashville',
  'allOthers': 'All Others'
};

const locationIds = ['875790027', '875790032'];

// Function to extract all unique feature keys from a configuration object
const getFeaturesFromConfig = (config) => {
  const featureSet = new Set();
  Object.values(config).forEach(jobData => {
    Object.keys(jobData).forEach(key => {
      if (key !== 'JobTypeName' && key !== 'Locations') {
        featureSet.add(key);
      }
    });
    if (jobData.Locations) {
      Object.values(jobData.Locations).forEach(locData => {
        Object.keys(locData).forEach(key => {
          if (key !== 'LocationNameText') {
            featureSet.add(key);
          }
        });
      });
    }
  });
  return Array.from(featureSet).sort();
};

// Function to format the config object for display, ensuring 'Locations' is the last key.
const formatConfigForDisplay = (configObj) => {
  const sortedConfig = {};
  for (const jobId in configObj) {
    if (Object.hasOwnProperty.call(configObj, jobId)) {
      const { Locations, ...rest } = configObj[jobId];
      const sortedJobData = { ...rest };
      if (Locations) {
        sortedJobData.Locations = Locations;
      }
      sortedConfig[jobId] = sortedJobData;
    }
  }
  return sortedConfig;
};


// --- Main App Component ---
export default function App() {
  const [config, setConfig] = useState(initialConfig);
  const [features, setFeatures] = useState(() => getFeaturesFromConfig(initialConfig));
  const [newFeatureName, setNewFeatureName] = useState('');
  const [expandedJobTypes, setExpandedJobTypes] = useState({});
  const [isJsonVisible, setIsJsonVisible] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [featureToDelete, setFeatureToDelete] = useState(null);

  // Memoize job types as they only change if the config structure changes
  const jobTypes = useMemo(() => {
    return Object.entries(config).map(([jobId, jobData]) => ({
      id: jobId,
      name: jobData.JobTypeName
    }));
  }, [config]);

  // Update the features list whenever the main config is updated
  useEffect(() => {
    const newFeatures = getFeaturesFromConfig(config);
    setFeatures(currentFeatures => {
      const combined = new Set([...currentFeatures, ...newFeatures]);
      return Array.from(combined).sort();
    });
  }, [config]);

  const handleAddFeature = () => {
    const trimmedName = newFeatureName.trim();
    if (trimmedName && !features.includes(trimmedName)) {
      setFeatures(prevFeatures => [...prevFeatures, trimmedName].sort());
      setNewFeatureName('');
    } else if (features.includes(trimmedName)) {
      console.warn(`Feature "${trimmedName}" already exists.`);
    }
  };

  const handleDeleteFeature = (featureNameToDelete) => {
    // Remove from the features list in the UI
    setFeatures(prevFeatures => prevFeatures.filter(f => f !== featureNameToDelete));

    // Remove from the config JSON
    setConfig(currentConfig => {
      const newConfig = JSON.parse(JSON.stringify(currentConfig));
      for (const jobId in newConfig) {
        if (newConfig[jobId][featureNameToDelete]) {
          delete newConfig[jobId][featureNameToDelete];
        }
        if (newConfig[jobId].Locations) {
          for (const locId in newConfig[jobId].Locations) {
            if (newConfig[jobId].Locations[locId][featureNameToDelete]) {
              delete newConfig[jobId].Locations[locId][featureNameToDelete];
            }
          }
        }
      }
      return newConfig;
    });

    setFeatureToDelete(null); // Close confirmation modal
  };


  const handleOpenJsonPopup = () => {
    const formattedConfig = formatConfigForDisplay(config);
    setJsonInput(JSON.stringify(formattedConfig, null, 2));
    setJsonError('');
    setIsJsonVisible(true);
  };

  const handleApplyJsonChanges = () => {
    try {
      const newConfig = JSON.parse(jsonInput);
      setConfig(newConfig);
      setIsJsonVisible(false);
    } catch (error) {
      setJsonError('Invalid JSON format. Please check your syntax.');
      console.error("JSON parsing error:", error);
    }
  };

  const toggleJobTypeExpansion = (jobId) => {
    setExpandedJobTypes(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const getFeatureStateForLocation = useCallback((feature, jobId, locationId) => {
    const jobData = config[jobId];
    if (!jobData) return false;

    const jobLevelStatus = jobData[feature] === true;

    if (locationId === 'allOthers') {
      return jobLevelStatus;
    }

    const locationOverride = jobData.Locations?.[locationId]?.[feature];

    if (typeof locationOverride === 'boolean') {
      return locationOverride;
    }

    return jobLevelStatus;
  }, [config]);

  const getJobTypeAggregateState = useCallback((feature, jobId) => {
    const gatewayState = getFeatureStateForLocation(feature, jobId, '875790027');
    const nashvilleState = getFeatureStateForLocation(feature, jobId, '875790032');
    const allOthersState = getFeatureStateForLocation(feature, jobId, 'allOthers');

    const states = [gatewayState, nashvilleState, allOthersState];
    const allEnabled = states.every(s => s === true);
    const allDisabled = states.every(s => s === false);

    if (allEnabled) return 'enabled';
    if (allDisabled) return 'disabled';
    return 'partial';
  }, [getFeatureStateForLocation]);

  const handleToggle = (feature, jobId, locationId = null) => {
    setConfig(currentConfig => {
      const newConfig = JSON.parse(JSON.stringify(currentConfig)); // Deep copy
      const jobData = newConfig[jobId];
      if (!jobData) return currentConfig;

      if (!locationId) {
        const currentState = getJobTypeAggregateState(feature, jobId);
        const shouldTurnOn = currentState === 'disabled';

        if (shouldTurnOn) {
          jobData[feature] = true;
          locationIds.forEach(locId => {
            if (jobData.Locations?.[locId]) delete jobData.Locations[locId][feature];
          });
        } else {
          delete jobData[feature];
          locationIds.forEach(locId => {
            if (jobData.Locations?.[locId]) delete jobData.Locations[locId][feature];
          });
        }
      }
      else {
        const currentLocState = getFeatureStateForLocation(feature, jobId, locationId);
        const newLocState = !currentLocState;
        const jobLevelStatus = jobData[feature] === true;

        if (!jobData.Locations) jobData.Locations = {};
        if (locationId !== 'allOthers' && !jobData.Locations[locationId]) {
          jobData.Locations[locationId] = { LocationNameText: locationMap[locationId] };
        }

        if (locationId === 'allOthers') {
          if (newLocState) jobData[feature] = true;
          else delete jobData[feature];
        } else {
          if (newLocState === jobLevelStatus) {
            if (jobData.Locations?.[locationId]) delete jobData.Locations[locationId][feature];
          } else {
            jobData.Locations[locationId][feature] = newLocState;
          }
        }
      }
      return newConfig;
    });
  };

  const Cell = ({ state, onClick }) => {
    const stateClasses = {
      enabled: 'bg-green-100 border-green-400 hover:bg-green-200',
      disabled: 'bg-red-100 border-red-400 hover:bg-red-200',
      partial: 'bg-yellow-100 border-yellow-400 hover:bg-yellow-200',
    };
    const stateIndicator = {
      enabled: <div className="w-3 h-3 bg-green-500 rounded-full"></div>,
      disabled: <div className="w-3 h-3 bg-red-500 rounded-full"></div>,
      partial: <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>,
    };

    return (
      <td className={`p-2 border text-center transition-colors duration-150 cursor-pointer ${stateClasses[state]}`} onClick={onClick}>
        <div className="flex items-center justify-center">
          {stateIndicator[state]}
        </div>
      </td>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h1 className="text-2xl font-bold text-slate-700">Feature Configuration</h1>
            <button
              onClick={handleOpenJsonPopup}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-all">
              View/Edit JSON
            </button>
          </div>

          <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={newFeatureName}
                onChange={(e) => setNewFeatureName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                placeholder="Enter new feature name..."
                className="flex-grow px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleAddFeature}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all disabled:bg-slate-400 disabled:cursor-not-allowed"
                disabled={!newFeatureName.trim()}
              >
                <PlusCircle />
                Add Feature
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-300">
              <thead className="bg-slate-100 sticky top-0 z-10">
                <tr>
                  <th className="p-3 border border-slate-300 text-left font-semibold text-slate-600 w-1/4">Feature Name</th>
                  {jobTypes.map(job => (
                    <th key={job.id} className="p-3 border border-slate-300 font-semibold text-slate-600" colSpan={expandedJobTypes[job.id] ? 3 : 1}>
                      <div className="flex items-center justify-center space-x-2">
                        <span>{job.name}</span>
                        <button onClick={() => toggleJobTypeExpansion(job.id)} className="p-1 rounded-full hover:bg-slate-200">
                          {expandedJobTypes[job.id] ? <ChevronDown /> : <ChevronRight />}
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
                <tr>
                  <th className="p-2 border border-slate-300 bg-slate-100"></th>
                  {jobTypes.map(job => {
                    if (expandedJobTypes[job.id]) {
                      return Object.entries(locationMap).map(([id, name]) => (
                        <th key={`${job.id}-${id}`} className="p-2 border border-slate-300 font-medium bg-slate-50 text-slate-500 text-sm">{name}</th>
                      ));
                    }
                    return <th key={job.id} className="p-2 border border-slate-300 font-medium bg-slate-50 text-slate-500 text-sm">Overall</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {features.map(feature => (
                  <tr key={feature} className="hover:bg-slate-50 group">
                    <td className="p-3 border border-slate-300 font-medium text-slate-700 flex justify-between items-center">
                      <span>{feature}</span>
                      <button
                        onClick={() => setFeatureToDelete(feature)}
                        className="text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        title={`Delete ${feature}`}>
                        <Trash2 />
                      </button>
                    </td>
                    {jobTypes.map(job => {
                      if (expandedJobTypes[job.id]) {
                        return Object.keys(locationMap).map(locId => (
                          <Cell
                            key={`${feature}-${job.id}-${locId}`}
                            state={getFeatureStateForLocation(feature, job.id, locId) ? 'enabled' : 'disabled'}
                            onClick={() => handleToggle(feature, job.id, locId)}
                          />
                        ));
                      }
                      return (
                        <Cell
                          key={`${feature}-${job.id}`}
                          state={getJobTypeAggregateState(feature, job.id)}
                          onClick={() => handleToggle(feature, job.id)}
                        />
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isJsonVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsJsonVisible(false)}>
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full min-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Live JSON Configuration</h2>
              <button onClick={() => setIsJsonVisible(false)} className="text-slate-500 hover:text-slate-800 text-3xl leading-none">&times;</button>
            </div>
            <div className="p-4 overflow-auto flex-grow">
              <textarea
                className="w-full h-full p-4 rounded-md bg-slate-900 text-slate-100 min-h-[80vh] font-mono text-sm border-slate-700 focus:ring-indigo-500 focus:border-indigo-500"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                spellCheck="false"
              />
            </div>
            {jsonError && <p className="text-red-600 text-center px-4 text-sm font-medium">{jsonError}</p>}
            <div className="p-4 border-t flex justify-end items-center gap-4">
              <button
                onClick={() => setIsJsonVisible(false)}
                className="px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
                Cancel
              </button>
              <button
                onClick={handleApplyJsonChanges}
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {featureToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800">Confirm Deletion</h3>
              <p className="mt-2 text-slate-600">
                Are you sure you want to delete the feature <span className="font-semibold">"{featureToDelete}"</span>? This action cannot be undone.
              </p>
            </div>
            <div className="px-6 py-4 bg-slate-50 rounded-b-lg flex justify-end items-center gap-4">
              <button
                onClick={() => setFeatureToDelete(null)}
                className="px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
                Cancel
              </button>
              <button
                onClick={() => handleDeleteFeature(featureToDelete)}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                Delete Feature
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


