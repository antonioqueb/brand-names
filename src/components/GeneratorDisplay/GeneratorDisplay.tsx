import React, { useState } from 'react';

interface GeneratorDisplayProps {
    onSubmit: (name: string) => void;
}

const GeneratorDisplay: React.FC<GeneratorDisplayProps> = ({ onSubmit }) => {
    const [words, setWords] = useState<string[]>([]);
    const [industry, setIndustry] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [name, setName] = useState<string>('');

    const syllables = [
        'a', 'al', 'ar', 'ba', 'ca', 'cal', 'car', 'ce', 'che', 'co',
        'da', 'de', 'do', 'el', 'en', 'fa', 'fe', 'fi', 'ga', 'ge',
        'gi', 'go', 'gu', 'ha', 'he', 'hi', 'ho', 'hu', 'ja', 'je',
        'jo', 'ju', 'la', 'le', 'li', 'lo', 'lu', 'ma', 'me', 'mi',
        'mo', 'mu', 'na', 'ne', 'ni', 'no', 'nu', 'ña', 'ño', 'pa',
        'pe', 'pi', 'po', 'pu', 'que', 'ra', 're', 'ri', 'ro', 'ru',
        'sa', 'se', 'si', 'so', 'su', 'ta', 'te', 'ti', 'to', 'tu',
        'va', 've', 'vi', 'vo', 'vu', 'xa', 'xe', 'xi', 'ya', 'ye',
        'yo', 'za', 'zo',
    ];

    const generateName = () => {
        const maxNameLength = 6;
        let generatedName = '';
        let length = 0;

        const wordSyllables: string[] = words.reduce<string[]>(
            (acc, word) => {
                return [...acc, ...syllables.filter(syllable => word.includes(syllable))];
            },
            []
        );

        const industryNormalized = normalizeString(industry);
        const descriptionNormalized = normalizeString(description);

        const validSyllables: string[] = wordSyllables.filter((syllable) =>
            syllables.includes(syllable)
        );

        while (length < maxNameLength) {
            const randomSyllable = validSyllables[Math.floor(Math.random() * validSyllables.length)];
            generatedName += length === 0 ? randomSyllable.charAt(0).toUpperCase() + randomSyllable.slice(1) : randomSyllable;
            length += randomSyllable.length;
        }

        generatedName += ` ${industryNormalized} ${descriptionNormalized}`;

        setName(generatedName);
        onSubmit(generatedName);
    };

    const normalizeString = (string: string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const buttonStyle = {
        backgroundColor: '#C4EEF2',
        color: '#025159',
        border: 'none',
        padding: '20px 40px', // Ajusta el padding del botón
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.2em' // Ajusta el tamaño de la fuente del botón
    };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Detiene el comportamiento predeterminado del formulario

        generateName(); // Genera el nombre

        setShowSuccessMessage(true); // Muestra el mensaje de éxito
        setTimeout(() => setShowSuccessMessage(false), 3000); // Restablece el mensaje de éxito después de 3 segundos
    };

    const containerStyle = {
        height: 'calc(100vh - 40px)', // Ajusta la altura del contenedor
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw' // Ajusta el ancho del contenedor
    };

    const innerContainerStyle = {
        backgroundColor: '#3F858C',
        padding: '20px',
        borderRadius: '10px',
        color: '#f2f2f2',
        fontFamily: 'Arial',
        maxWidth: '80%',
        maxHeight: '80vh', // Ajusta la altura máxima del contenedor interior
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle} className="text-center">
                <h2 className="text-white" style={{ fontSize: '2em' }}>Innovative Brand Names</h2>
                <br />
                <br />

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{ fontSize: '1.2em' }}>Write the keywords of your business:</label>
                        <br />

                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setWords(e.target.value.split(","))}
                        />
                    </div>
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={buttonStyle}
                    >
                        Generate Brand
                    </button>
                </form>
                {name && (
                    <div className="card mt-4 rounded">
                        <div className="card-body">
                            <h4 className="card-title text-black">{name}</h4>
                        </div>
                    </div>
                )}
                {showSuccessMessage && (
                    <div className="alert alert-success mt-4" role="alert">
                        The name has been generated successfully!
                    </div>
                )}
            </div>
                    <footer className="text-center  py-3 mt-auto">
                <p>
                Creado por <a href="https://github.com/antonioqueb">Antonio Queb</a>
                </p>
            </footer>
        </div>
    );



};

export default GeneratorDisplay;
