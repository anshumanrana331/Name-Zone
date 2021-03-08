import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames, headerExpanded }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName.id} suggestedName={suggestedName} />;
    });

    return <div className={`results-container ${
                    headerExpanded
                ? 'results-container-expanded'
                : 'results-container-contracted'
            }`} 
            >   {suggestNameJsx}    </div>;
};

export default ResultsContainer;
