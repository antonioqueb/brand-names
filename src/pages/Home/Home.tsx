import React, { useState } from 'react';
import GeneratorDisplay from '../../components/GeneratorDisplay/GeneratorDisplay';
import DisplayContainer from '../../components/DisplayContainer/DisplayContainer';
import FooterDisplay from '../../components/FooterDisplay/FooterDisplay';

const Home: React.FC = () => {
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  const handleNameSubmit = (name: string) => {
    setGeneratedNames([...generatedNames, name]);
  };

  return (
    <div>
      <br />
      <GeneratorDisplay onSubmit={handleNameSubmit} />
      <DisplayContainer brandNames={generatedNames} />
      <FooterDisplay />
      <br />

    </div>
  );
};

export default Home;
