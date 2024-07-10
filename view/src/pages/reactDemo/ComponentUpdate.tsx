import React, { useState } from 'react';

const initialTravelList = [
  { city: 'shanghai', country: 'China' },
  { city: 'paris', country: 'France' },
];

const ComponentUpdate = () => {
  const [travelList, setTravelList] = useState(initialTravelList);

  return <div>ComponentUpdate</div>;
};

export default ComponentUpdate;
