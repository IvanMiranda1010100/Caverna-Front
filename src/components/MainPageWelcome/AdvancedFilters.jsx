import React from 'react';

const AdvancedFilters = ({ onFilterChange, resultsCount }) => {
  const handleFilterClick = (filterType, value) => {
    onFilterChange({ [filterType]: value });
  };

  return (
    <>
      <main className="filters-container flex flex-col sm:flex-row sm:justify-between items-center mb-4">
        {/* Cantidad de resultados */}
        <div className='results-count text-lg sm:text-2xl font-medium'>
          {resultsCount} resultados
        </div>

        {/* Barra de filtros */}
        <div className="filters-bar flex flex-wrap items-center justify-end gap-2 text-sm sm:text-base mt-2 sm:mt-0">
          <span className="font-bold opacity-55">Ordenar por:</span>
          
          <button
            className="filter-button"
            onClick={() => handleFilterClick('sort', 'mostRecent')}
          >
            Más reciente
          </button>

          <button
            className="filter-button"
            onClick={() => handleFilterClick('sort', 'mostOld')}
          >
            Más viejo
          </button>
          
          <button
            className="filter-button"
            onClick={() => handleFilterClick('sort', 'az')}
          >
            A-Z
          </button>
        </div>
      </main>

      <hr className='border border-solid border-gray-400 mb-4' />
      
      {/* Estilos en línea para personalización */}
      <style>
        {`
        .filters-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 640px) {
          .filters-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .filters-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem; /* Espacio entre los botones */
        }

        .filter-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          transition: color 0.3s;
          opacity:.600;
        }

        .filter-button:hover {
          color: #1d4ed8; /* Color de hover */
        }

        .filters-bar .font-bold {
          margin-right: 10px; /* Espacio después de "Ordenar por:" */
        }
        `}
      </style>
    </>
  );
};

export default AdvancedFilters;
