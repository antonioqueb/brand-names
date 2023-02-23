import React, { useState } from 'react';
import GeneratorDisplay from '../../components/GeneratorDisplay/GeneratorDisplay';
import DisplayContainer from '../../components/DisplayContainer/DisplayContainer';

const Home: React.FC = () => {
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  const handleNameSubmit = (name: string) => {
    setGeneratedNames([...generatedNames, name]);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <GeneratorDisplay onSubmit={handleNameSubmit} />
      <DisplayContainer brandNames={generatedNames} />
      <br />
    </div>
  );
};

export default Home;
