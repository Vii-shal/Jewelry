import React, { useState } from 'react';
import './Jwellery.css';

import img11111 from '../../Rings/product15.jpeg';
import img11112 from '../../Rings/product17.jpeg';
import img11113 from '../../Rings/product16.jpeg';
import img12111 from '../../Rings/product1.jpg';
import img12112 from '../../Rings/product5.jpg';
import img12113 from '../../Rings/product4.jpg';
import img13111 from '../../Rings/product6.jpg';
import img13112 from '../../Rings/product11.jpg';
import img13113 from '../../Rings/product10.jpg';
import img14111 from '../../Rings/product7.jpg';
import img14112 from '../../Rings/product9.jpg';
import img14113 from '../../Rings/product8.jpg';
import img15111 from '../../Rings/product12.jpg';
import img15112 from '../../Rings/product14.jpg';
import img15113 from '../../Rings/product13.jpg';
import silverBtn from '../../Rings/Images/silver-btn.jpeg';
import goldBtn from '../../Rings/Images/gold-btn.jpeg';
import copperBtn from '../../Rings/Images/copper-btn.jpeg';

function Jwellery() {
  const [ringBase, setRingBase] = useState('11111');

  const images = {
    '11111': img11111,
    '11112': img11112,
    '11113': img11113,
    '12111': img12111,
    '12112': img12112,
    '12113': img12113,
    '13111': img13111,
    '13112': img13112,
    '13113': img13113,
    '14111': img14111,
    '14112': img14112,
    '14113': img14113,
    '15111': img15111,
    '15112': img15112,
    '15113': img15113,
  };

  const changeRingProperty = (type, num) => {
    let newRingBase = ringBase.split('');
    newRingBase[type] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  };

  const ringData = [
    {
      ring_type_heading: 'Ring Shape',
      ring_buttons: [images['11111']],
    },
    {
      ring_type_heading: 'Gem Type',
      ring_buttons: [
        images['11111'],
        images['12111'],
        images['13111'],
        images['14111'],
        images['15111'],
      ],
    },
    {
      ring_type_heading: 'Ring Curvature',
      ring_buttons: [images['11111']],
    },
    {
      ring_type_heading: 'Gem Line',
      ring_buttons: [images['11111']],
    },
    {
      ring_type_heading: 'Material',
      ring_buttons: [silverBtn, goldBtn, copperBtn],
    },
  ];

  const getChangeFunction = (heading) => {
    switch (heading) {
      case 'Ring Shape':
        return (num) => changeRingProperty(0, num);
      case 'Gem Type':
        return (num) => changeRingProperty(1, num);
      case 'Ring Curvature':
        return (num) => changeRingProperty(2, num);
      case 'Gem Line':
        return (num) => changeRingProperty(3, num);
      case 'Material':
        return (num) => changeRingProperty(4, num);
      default:
        return null;
    }
  };

  return (
    <div className='main-container'>
      <div className="ring-image">
        <div className="ring-container">
          <div className="image-wrapper">
            <img id="ringBase" src={images[ringBase]} alt="Ring Base" />
          </div>
        </div>
      </div>
      <div className="ring-features">
        {ringData.map((ring, index) => (
          <div key={index} className="ring-type-container">
            <div className="ring-type-container-title">{ring.ring_type_heading}</div>
            <div className="ring-type-buttons">
              {ring.ring_buttons.map((btn, btnIndex) => (
                <div
                  key={btnIndex}
                  className="ring-type-button"
                  id={`ring-type-button-${btnIndex + 1}`}
                  onClick={() => getChangeFunction(ring.ring_type_heading)(btnIndex + 1)}
                >
                  <img src={btn} alt={`${ring.ring_type_heading} ${btnIndex + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jwellery;
