import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/yni58-ni/afa9c724fee68bf67e97cc6dc8aa3c3b/raw/60e3cd6a4ad29c49dd8276e1e21840728cd37870/testData.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Time = +d.Time;
      d.Value = +d.Value;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};