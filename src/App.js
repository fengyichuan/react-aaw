import './App.css';
import { Navigation } from './Navigation';
import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import AppLayout from "@awsui/components-react/app-layout";

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);

  useEffect(() => {

  }, [isNavigationOpen]); 

  return (
    <div>
    <AppLayout
    content={<Routes/>}
    navigation={<Navigation />}
    navigationOpen={isNavigationOpen}
  />
  </div>
  );
}

export default App;
