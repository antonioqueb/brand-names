import React from 'react';


interface BrandNameCardsProps {
    brandNames: string[];
  }
  

const BrandNameCards: React.FC<BrandNameCardsProps> = ({ brandNames }) => {
  const cardStyles = [
    { backgroundColor: '#C4EEF2', color: '#025159', fontFamily: 'Arial' },
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
  ];

  return (
    <div className="row">
      {brandNames.map((brandName, index) => {
        const style = cardStyles[index % cardStyles.length];
        return (
          <div className="col-md-3 my-3" key={index}>
            <div className="card" style={style}>
              <div className="card-body">
                <h4 className="card-title">{brandName}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandNameCards;
