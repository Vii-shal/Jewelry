import React from 'react';
import { useState } from 'react';
import './Jwellery.css'
import React360Viewer from 'react-360-view';

function Jwellery() {

  const [ringBase, setRingBase] = useState("11111");
  // const [gem, setGem] = useState('');

  let  images = {
    "11111": "../Rings/product15.jpeg",
    "11112": "../Rings/product17.jpeg",
    "11113": "../Rings/product16.jpeg",
    "12111": "../Rings/product1.jpg",
    "12112": "../Rings/product5.jpg",
    "12113": "../Rings/product4.jpg",
    "13111": "../Rings/product6.jpg",
    "13112": "../Rings/product11.jpg",
    "13113": "../Rings/product10.jpg",
    "14111": "../Rings/product7.jpg",
    "14112": "../Rings/product9.jpg",
    "14113": "../Rings/product8.jpg",
    "15111": "../Rings/product12.jpg",
    "15112": "../Rings/product14.jpg",
    "15113": "../Rings/product13.jpg",
  }

  function changeRingType(num) {
    let newRingBase = ringBase.split('');
    newRingBase[0] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  }

  function changeGemType(num) {
    let newRingBase = ringBase.split('');
    newRingBase[1] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  }

  function changeRingCurvatureType(num) {
    let newRingBase = ringBase.split('');
    newRingBase[2] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  }

  function changeRingLineType(num) {
    let newRingBase = ringBase.split('');
    newRingBase[3] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  }

  function changeRingMaterialType(num) {
    let newRingBase = ringBase.split('');
    newRingBase[4] = num;
    setRingBase(newRingBase.join(''));
    console.log(newRingBase.join(''));
  }

  function changeMaterial(id){
    const img = document.querySelector('#ringBase')
    if (id === 'ring-material-1'){
      img.classList.add('silver');
      img.classList.remove('gold', 'copper');
    }
    else if (id === 'ring-material-2'){
      img.classList.add('gold');
      img.classList.remove('silver', 'copper');
    }
    else if (id === 'ring-material-3'){
      img.classList.add('copper');
      img.classList.remove('silver', 'gold');
    }
  }

  const ring_data = [
    {
      ring_type_heading: 'Ring Shape',
      ring_buttons: [images[11111],
       ],
      // ring_buttons: ['1','2','3','4']
    },
    {
      ring_type_heading: 'Gem Type',
      ring_buttons: [images[11111],
                    images[12111],
                    images[13111],
                    images[14111],
                    images[15111],
          ],
      // ring_buttons: ['1','2','3','4','5','6','7','8']
    },
    {
      ring_type_heading: 'Ring Curvature',
      ring_buttons: [images[11111],
       
        ],
    },
    {
      ring_type_heading: 'Gem line',
      ring_buttons: [images[11111],
       
      ],
    },
    {
      ring_type_heading: 'Material',
      ring_buttons: ['../Rings/Images/silver-btn.jpeg',
        '../Rings/Images/gold-btn.jpeg',
         '../Rings/Images/copper-btn.jpeg'],
    },
  ];




  return (
    <div className='main-container'>
      <div className="ring-image">
      <div className="ring-container">
        <div className="image-wrapper">
              <img 
                  id="ringBase" src={images[ringBase]} 
              />
        </div>
      </div>
      </div>
      <div className="ring-features">
        {ring_data.map((ring, index) => (
          <div key={index} className="ring-type-container">
            <div className="ring-type-container-title">{ring.ring_type_heading}</div>
            <div className="ring-type-buttons">
              {ring.ring_buttons.map((btn, btnIndex) => (
                <div key={btnIndex} className="ring-type-button" id={`ring-type-button-${btnIndex + 1}`}  
                    onClick={() =>
                        ring.ring_type_heading === 'Ring Shape'
                        ? changeRingType(btnIndex + 1)
                        : ring.ring_type_heading === 'Gem Type'
                        ? changeGemType(btnIndex + 1)
                        : ring.ring_type_heading === 'Ring Curvature'
                        ? changeRingCurvatureType(btnIndex+ 1)
                        : ring.ring_type_heading === 'Gem line'
                        ? changeRingLineType(btnIndex + 1)
                        : ring.ring_type_heading === 'Material'
                        ? changeRingMaterialType(btnIndex + 1)
                        : null
                    } 
                >
                  <img src={btn} alt={`${btnIndex + 1}`} />
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



// import React, { useState } from 'react';
// import './Jwellery.css';

// const Jewellery = () => {
//   const [ringBase, setRingBase] = useState('https://dummyimage.com/300x300/ccc/fff.png&text=Ring+Base');
//   const [ringGem, setRingGem] = useState('https://dummyimage.com/100x100/000/fff.png&text=Gem');

//   const changeRingType = (event) => {
//     setRingBase(event.target.value);
//   };

//   const changeGemType = (event) => {
//     setRingGem(event.target.value);
//   };

//   const changeGemColor = (event) => {
//     setRingGem(event.target.value);
//   };

//   const changeRingMaterial = (event) => {
//     setRingBase(event.target.value);
//   };

//   return (
//     // <div className="main-container">

// //     <div className="configurator">
// //       <div className="ring-container">
// //         <img id="ringBase" src={ringBase} alt="Ring Base" />
// //         <img id="ringGem" src={ringGem} alt="Ring Gem" />
// //       </div>
// //       <div className="controls">
// //         <label htmlFor="ringType">Choose Ring Type:</label>
// //         <select id="ringType" onChange={changeRingType}>
// //           <option value="https://dummyimage.com/300x300/ccc/fff.png&text=Ring+Base">Default</option>
// //           <option value="https://dummyimage.com/300x300/999/fff.png&text=Ring+Type+1">Type 1</option>
// //           <option value="https://dummyimage.com/300x300/666/fff.png&text=Ring+Type+2">Type 2</option>
// //         </select>
        
// //         <label htmlFor="gemType">Choose Gem Type:</label>
// //         <select id="gemType" onChange={changeGemType}>
// //           <option value="https://dummyimage.com/100x100/000/fff.png&text=Gem">Default</option>
// //           <option value="https://dummyimage.com/100x100/ff0000/fff.png&text=Ruby">Ruby</option>
// //           <option value="https://dummyimage.com/100x100/0000ff/fff.png&text=Sapphire">Sapphire</option>
// //         </select>

// //         <label htmlFor="gemColor">Choose Gem Color:</label>
// //         <select id="gemColor" onChange={changeGemColor}>
// //           <option value="https://dummyimage.com/100x100/000/fff.png&text=Gem">Default</option>
// //           <option value="https://dummyimage.com/100x100/0000ff/fff.png&text=Blue+Gem">Blue</option>
// //           <option value="https://dummyimage.com/100x100/ff0000/fff.png&text=Red+Gem">Red</option>
// //         </select>
        
// //         <label htmlFor="ringMaterial">Choose Ring Material:</label>
// //         <select id="ringMaterial" onChange={changeRingMaterial}>
// //           <option value="https://dummyimage.com/300x300/ccc/fff.png&text=Silver+Ring">Silver</option>
// //           <option value="https://dummyimage.com/300x300/ffd700/fff.png&text=Gold+Ring">Gold</option>
// //           <option value="https://dummyimage.com/300x300/ff69b4/fff.png&text=Rose+Gold+Ring">Rose Gold</option>
// //         </select>
// //       </div>
// //     </div>
// //     // </div>

// //   );
// // };

// // export default Jewellery;
