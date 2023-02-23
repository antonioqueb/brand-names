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
        'a', 'al', 'am', 'an', 'ar', 'as', 'at', 'ba', 'be', 'bi', 'bo',
        'bu', 'ca', 'ce', 'ci', 'co', 'cu', 'da', 'de', 'di', 'do', 'du',
        'e', 'el', 'en', 'er', 'es', 'et', 'fa', 'fe', 'fi', 'fo', 'fu',
        'ga', 'ge', 'gi', 'go', 'gu', 'ha', 'he', 'hi', 'ho', 'hu', 'ia',
        'ie', 'ig', 'io', 'ja', 'je', 'ji', 'jo', 'ju', 'ka', 'ke', 'ki',
        'ko', 'ku', 'la', 'le', 'li', 'lo', 'lu', 'ma', 'me', 'mi', 'mo',
        'mu', 'na', 'ne', 'ni', 'no', 'nu', 'ña', 'ño', 'o', 'ol', 'om',
        'on', 'or', 'os', 'ot', 'pa', 'pe', 'pi', 'po', 'pu', 'que', 'ra',
        're', 'ri', 'ro', 'ru', 'sa', 'se', 'si', 'so', 'su', 'ta', 'te',
        'ti', 'to', 'tu', 'ua', 'ue', 'ui', 'uo', 'va', 've', 'vi', 'vo',
        'vu', 'xa', 'xe', 'xi', 'ya', 'ye', 'yo', 'za', 'ze', 'zi', 'zo',
        'a', 'ab', 'ac', 'ad', 'af', 'ag', 'ah', 'al', 'am', 'an',
        'ap', 'ar', 'as', 'at', 'au', 'aw', 'ay', 'be', 'bi', 'ble',
        'blu', 'bo', 'bra', 'bre', 'bri', 'bro', 'bu', 'by', 'ca', 'cal',
        'can', 'car', 'ce', 'cha', 'che', 'ci', 'cit', 'cla', 'cle', 'co',
        'com', 'con', 'cor', 'cu', 'cy', 'da', 'de', 'del', 'der', 'des',
        'di', 'dia', 'dif', 'dis', 'do', 'doc', 'du', 'dy', 'e', 'eb',
        'ed', 'ef', 'el', 'em', 'en', 'end', 'ent', 'er', 'era', 'ere',
        'eri', 'ero', 'ers', 'es', 'ess', 'est', 'et', 'eu', 'ev', 'ex',
        'fa', 'fal', 'fe', 'fer', 'fi', 'fin', 'fir', 'fla', 'fle', 'fo',
        'for', 'fra', 'fre', 'fu', 'ful', 'fy', 'ga', 'ge', 'gen', 'ger',
        'gi', 'glu', 'go', 'gra', 'gre', 'gy', 'ha', 'hal', 'he', 'hed',
        'hem', 'hen', 'her', 'hes', 'hi', 'ho', 'hor', 'hu', 'hy', 'i',
        'ib', 'ic', 'id', 'ig', 'il', 'im', 'in', 'inc', 'ind', 'ine',
        'ing', 'ini', 'ink', 'inn', 'ins', 'int', 'io', 'ir', 'is', 'ish',
        'it', 'iv', 'iz', 'ja', 'je', 'ji', 'jo', 'ju', 'ka', 'ke', 'ki',
        'kn', 'la', 'lan', 'lar', 'lat', 'le', 'lec', 'leg', 'len', 'ler',
        'les', 'let', 'li', 'lic', 'lid', 'lin', 'lo', 'lon', 'lor', 'lu',
        'ly', 'ma', 'mac', 'mad', 'mag', 'man', 'mar', 'mas', 'mat', 'me',
        'med', 'mel', 'men', 'mer', 'mes', 'met', 'mi', 'mic', 'mid', 'mil',
        'min', 'mis', 'mo', 'mol', 'mon', 'mor', 'mu', 'my', 'na', 'nal',
        'nar', 'nat', 'ne', 'ned', 'nel', 'ner', 'nes', 'net', 'ni', 'nic',
        'nid', 'nil', 'nin', 'nip', 'nis', 'nit', 'no', 'noc', 'nod', 'nol',
        'non', 'nor', 'nu', 'ny', 'o', 'ob', 'oc', 'od', 'of', 'og', 'oi',
        'ok', 'ol','om', 'on', 'one', 'ong', 'onk', 'ons', 'ont', 'oo', 'op', 'or',
        'ord', 'ore', 'orn', 'ors', 'ort', 'os', 'ot', 'ou', 'ous', 'ov',
        'ow', 'pa', 'pac', 'pal', 'pan', 'par', 'pas', 'pat', 'pe', 'ped',
        'pel', 'pen', 'per', 'pet', 'pi', 'pic', 'pie', 'pin', 'pla', 'ple',
        'pli', 'po', 'pon', 'por', 'pos', 'pot', 'pr', 'pre', 'pri', 'pro',
        'pu', 'py', 'qua', 'que', 'qui', 'ra', 'rac', 'rad', 'rag', 'ram',
        'ran', 'rap', 'rat', 're', 'rec', 'red', 'ree', 'ref', 'reg', 'rel',
        'rem', 'ren', 'res', 'ret', 'ri', 'ric', 'rid', 'rig', 'ril', 'rim',
        'rin', 'rip', 'ris', 'rit', 'ro', 'roc', 'rod', 'rom', 'ron', 'ros',
        'rot', 'rou', 'row', 'ru', 'ry', 'sa', 'sac', 'sad', 'saf', 'sal',
        'san', 'sat', 'se', 'sec', 'sed', 'sel', 'sem', 'sen', 'ser', 'ses',
        'set', 'sh', 'sha', 'she', 'shi', 'sho', 'si', 'sid', 'sim', 'sin',
        'sis', 'sit', 'sk', 'ska', 'ske', 'ski', 'sko', 'sl', 'sla', 'sle',
        'sli', 'slo', 'sm', 'sma', 'sme', 'smi', 'smo', 'sn', 'sna', 'sne',
        'sni', 'sno', 'so', 'soc', 'sod', 'sol', 'son', 'sor', 'sot', 'sp',
        'spa', 'spe', 'spi', 'spo', 'spr', 'spu', 'st', 'sta', 'ste', 'sti',
        'sto', 'str', 'stu', 'su', 'sub', 'suc', 'sud', 'sul', 'sum', 'sun',
        'sup', 'sur', 'sus', 'sy', 'ta', 'tab', 'tac', 'tad', 'tag', 'tal',
        'tan', 'tap', 'tar', 'tas', 'tat', 'te', 'ted', 'tel', 'ten', 'ter',
        'tes', 'th', 'tha', 'the', 'thi', 'tho', 'ti', 'tic', 'tid', 'tie',
        'til', 'tim', 'tin', 'tis', 'tit', 'to', 'toc', 'tod', 'tog', 'tom',
        'ton', 'tor', 'tos', 'tot', 'tr', 'tra', 'tre', 'tri', 'tro', 'tru',
        'tu', 'tub', 'tuc', 'tud', 'tul', 'tum', 'tun', 'tur', 'tus', 'ty',
        'ub', 'uc', 'ud', 'uf', 'ug', 'uh', 'ul', 'um', 'un', 'up', 'ur', 'us', 'ut', 'va', 'val', 'van',
        'var', 've', 'vel', 'ven', 'ver', 'ves', 'vi', 'vic', 'vid', 'vil',
        'vim', 'vin', 'vis', 'vo', 'vol', 'vul', 'wa', 'wag', 'wal', 'wan',
        'war', 'was', 'wat', 'way', 'we', 'wed', 'wel', 'wen', 'wer', 'wes',
        'west', 'wh', 'whe', 'who', 'wi', 'wil', 'win', 'wis', 'wit', 'wo',
        'wol', 'won', 'wor', 'writ', 'wu', 'ya', 'yar', 'ye', 'yea', 'yen',
        'yes', 'yet', 'yi', 'yo', 'yon', 'you', 'yr', 'yu', 'za', 'ze',
        'zen', 'zi', 'zo', 'zu'
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
        </div>
    );



};

export default GeneratorDisplay;
