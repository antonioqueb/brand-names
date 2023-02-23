import React, { useState, useEffect } from 'react';

interface BrandNameCardsProps {
  brandNames: string[];
}

const BrandNameCards: React.FC<BrandNameCardsProps> = ({ brandNames }) => {
  const cardStyles = [{ backgroundColor: '#C4EEF2', color: '#025159', fontFamily: 'Arial' },
  { backgroundColor: '#EFEFEF', color: '#4C4C4C', fontFamily: 'Helvetica' },
  { backgroundColor: '#FFC0CB', color: '#800000', fontFamily: 'Verdana' },
  { backgroundColor: '#F5DEB3', color: '#A0522D', fontFamily: 'Georgia' },
  { backgroundColor: '#A9A9A9', color: '#F5F5F5', fontFamily: 'Courier New' },
  { backgroundColor: '#3CB371', color: '#F5F5F5', fontFamily: 'Impact' },
  { backgroundColor: '#FA8072', color: '#F5F5F5', fontFamily: 'Times New Roman' },
  { backgroundColor: '#87CEFA', color: '#191970', fontFamily: 'Comic Sans MS' },
  { backgroundColor: '#F0E68C', color: '#191970', fontFamily: 'Bookman Old Style' },
  { backgroundColor: '#DDA0DD', color: '#4B0082', fontFamily: 'Lucida Console' },
  { backgroundColor: '#B0C4DE', color: '#000080', fontFamily: 'Palatino Linotype' },
  { backgroundColor: '#BDB76B', color: '#006400', fontFamily: 'Trebuchet MS' },
  { backgroundColor: '#FFDAB9', color: '#8B4513', fontFamily: 'Montserrat' },
  { backgroundColor: '#ADD8E6', color: '#4169E1', fontFamily: 'Open Sans' },
  { backgroundColor: '#DE3163', color: '#FFFFFF', fontFamily: 'Raleway' },
  { backgroundColor: '#00FF7F', color: '#000000', fontFamily: 'Avenir' },
  { backgroundColor: '#FF6347', color: '#FFFFFF', fontFamily: 'Roboto' },
  { backgroundColor: '#8A2BE2', color: '#FFFFFF', fontFamily: 'Lato' },
  { backgroundColor: '#FFA07A', color: '#000000', fontFamily: 'Proxima Nova' },
  { backgroundColor: '#FF8C00', color: '#FFFFFF', fontFamily: 'Nunito' },
  { backgroundColor: '#7FFFD4', color: '#2F4F4F', fontFamily: 'Futura' },
  { backgroundColor: '#40E0D0', color: '#000000', fontFamily: 'Gotham' },
  { backgroundColor: '#008080', color: '#FFFFFF', fontFamily: 'Baskerville' },
  { backgroundColor: '#D8BFD8', color: '#000000', fontFamily: 'Playfair Display' },
  { backgroundColor: '#00CED1', color: '#FFFFFF', fontFamily: 'Poppins' },
  { backgroundColor: '#DB7093', color: '#FFFFFF', fontFamily: 'Oswald' },
  { backgroundColor: '#32CD32', color: '#000000', fontFamily: 'Roboto Condensed' },
  { backgroundColor: '#FF1493', color: '#FFFFFF', fontFamily: 'Merriweather' },
  { backgroundColor: '#00BFFF', color: '#FFFFFF', fontFamily: 'Hind' },
  { backgroundColor: '#BA55D3', color: '#FFFFFF', fontFamily: 'Source Sans Pro' },
  { backgroundColor: '#F0F8FF', color: '#000000', fontFamily: 'Noto Sans' },
  { backgroundColor: '#87CEEB', color: '#FFFFFF', fontFamily: 'PT Sans' },
  { backgroundColor: '#FFB6C1', color: '#000000', fontFamily: 'Ubuntu' },
  { backgroundColor: '#4682B4', color: '#FFFFFF', fontFamily: 'Lora' },
  { backgroundColor: '#00FA9A', color: '#000000', fontFamily: 'Josefin Sans' },
  { backgroundColor: '#9ACD32', color: '#FFFFFF', fontFamily: 'Cabin' },
  { backgroundColor: '#9370DB', color: '#FFFFFF', fontFamily: 'Quicksand' },
  { backgroundColor: '#66CDAA', color: '#000000', fontFamily: 'Nunito Sans' },
  { backgroundColor: '#FF7F50', color: '#FFFFFF', fontFamily: 'Inconsolata' },
  { backgroundColor: '#20B2AA', color: '#FFFFFF', fontFamily: 'Cormorant Garamond' },
  { backgroundColor: '#778899', color: '#FFFFFF', fontFamily: 'Archivo' },
  { backgroundColor: '#FF69B4', color: '#FFFFFF', fontFamily: 'Lobster' },
  { backgroundColor: '#6A5ACD', color: '#FFFFFF', fontFamily: 'Baloo Tamma' },
  { backgroundColor: '#F08080', color: '#FFFFFF', fontFamily: 'PT Serif' },
  { backgroundColor: '#2E8B57', color: '#FFFFFF', fontFamily: 'Montserrat Alternates' },
  { backgroundColor: '#B22222', color: '#FFFFFF', fontFamily: 'Lobster Two' },
  { backgroundColor: '#7B68EE', color: '#FFFFFF', fontFamily: 'Fjalla One' },
  { backgroundColor: '#FFFFE0', color: '#4B0082', fontFamily: 'Lobster' },
  { backgroundColor: '#F0FFFF', color: '#A0522D', fontFamily: 'Dancing Script' },
  { backgroundColor: '#F8F8FF', color: '#191970', fontFamily: 'Montserrat' },
  { backgroundColor: '#FFEBCD', color: '#2F4F4F', fontFamily: 'Oswald' },
  { backgroundColor: '#FAFAD2', color: '#800000', fontFamily: 'Playfair Display' },
  { backgroundColor: '#E6E6FA', color: '#006400', fontFamily: 'Raleway' },
  { backgroundColor: '#DCDCDC', color: '#191970', fontFamily: 'Open Sans' },
  { backgroundColor: '#D3D3D3', color: '#000000', fontFamily: 'PT Sans' },
  { backgroundColor: '#C0C0C0', color: '#FFFFFF', fontFamily: 'Nunito Sans' },
  { backgroundColor: '#BEBEBE', color: '#191970', fontFamily: 'Lato' },
  { backgroundColor: '#C71585', color: '#FFFFFF', fontFamily: 'Bebas Neue' },
  { backgroundColor: '#7FFF00', color: '#000000', fontFamily: 'Poppins' },
  { backgroundColor: '#00FF00', color: '#FFFFFF', fontFamily: 'Helvetica Neue' },
  { backgroundColor: '#008000', color: '#FFFFFF', fontFamily: 'Ubuntu' },
  { backgroundColor: '#6B8E23', color: '#FFFFFF', fontFamily: 'Roboto' },
  { backgroundColor: '#32CD32', color: '#000000', fontFamily: 'Avenir' },
  { backgroundColor: '#000080', color: '#FFFFFF', fontFamily: 'Gotham' },
  { backgroundColor: '#00008B', color: '#FFFFFF', fontFamily: 'Libre Baskerville' },
  { backgroundColor: '#191970', color: '#FFFFFF', fontFamily: 'Fira Sans' },
  { backgroundColor: '#7B68EE', color: '#FFFFFF', fontFamily: 'Source Sans Pro' }
  
  ];

  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    setCurrentName(brandNames[brandNames.length - 1]);
  }, [brandNames]);

  const cardHeight = {
    padding: '6rem 0',
  };

  return (
    <>
      {brandNames.length > 0 && (
        <div className="row">
          {[...Array(48)].map((_, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <div className="col-md-4 my-3 mx-0" key={index}>
                <div
                  className="card w-100"
                  style={{
                    ...style,
                    ...cardHeight,
                    objectFit: 'cover',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div className="card-body text-center">
                    <h1
                      className="card-title text-center text-uppercase font-weight-bold"
                      style={{ textShadow: '2px 2px #808080' }}
                    >
                      {currentName}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BrandNameCards;
