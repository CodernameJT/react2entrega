import React, { useState } from 'react'

function ProductFilter({ onFilterChange }) {
  const [isAlcoholic, setIsAlcoholic] = useState(false);

  const handleFilterChange = (event) => {
    setIsAlcoholic(event.target.checked)
    onFilterChange(event.target.checked)
  }

  return (
    <div>
      <label>
        Solo con Alcohol:
        <input type="checkbox" checked={isAlcoholic} onChange={handleFilterChange} />
      </label>
    </div>
  )
}

export default ProductFilter;
