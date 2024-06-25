import React from 'react';
import { useState } from 'react';
import './Jwellery.css'
import React360Viewer from 'react-360-view';

function Jwellery() {

  const [ringBase, setRingBase] = useState('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKuZtDesRGht42ry6u1GouhuQPxvb1jns3JqYZceE7uiy7usWB');
  // const [gem, setGem] = useState('');


  function changeRingType(ringType){
    setRingBase(ringType)
  }
  function changeGemType(gemType){
    setGem(gemType)
  }
  function changeRingCurvatureType(ringCurvatureType){
    setRingBase(ringCurvatureType)
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
      ring_buttons: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Y1fc_2CkWIq7itufZ4WAPpgtvR5iNNHlutLk5S2c9A84Uazv',
      
         'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTih6cyepijeubznfYUaYESXn0-IdYM4WXfYFXT-w6ODsDvno2',
         'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4Y63Vxt2j3n9DkyMrLuLjUsaof9j5AIkb3d6XM6zNzpEUiEO0',
          ],
    },
    {
      ring_type_heading: 'Gem Type',
      ring_buttons: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Y1fc_2CkWIq7itufZ4WAPpgtvR5iNNHlutLk5S2c9A84Uazv',

         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQscEwTP-NAK8Vm0V6gNpifsq_9dXyu4t8PJXRsncl_AEvO31X',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkCkINKH9TVS7qR37HZqaumi8qYJyjpPHdsqoiIfwYqpBbCwQ',
           'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDf-l7s2ccIKX22M3x7lcNs5DI3g2F5EFELSGyqUMn5O_dou9c',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlmJd0gUjFbus_HN-HMvLD0aakKWfv-vYx7DCHAZCc1lYNkIZ9',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0P6Q7oclkkB9bC5Uy0VU88WsMbY77bjFoy9pKaPm3nnkh2Tnv',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTln3AqSUYIXFxXT6InZKnTQgxTvzAAwArptiL4DkNKmVIo8Ixm',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsM-totdvTBDn0XFivG0tEcheznxuk4jakrBZP3GjJeS2HVfX3',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDabG_31hwyOYzRjF0Brmj4aLS23AWjG8dfAywLcR_TS4jIcm-',
          ],
    },
    {
      ring_type_heading: 'Ring Curvature',
      ring_buttons: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Y1fc_2CkWIq7itufZ4WAPpgtvR5iNNHlutLk5S2c9A84Uazv',
       
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwiH6Kmb-wShViELUzPwyw1n0A0z1aQNqIFfFOz-ssm6-A2pGl',
         'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIPC6B2IJ2dRvQ7QqVJpErJx90IsprNfg0UcHoQ2zVJEJTI3pp',
        ],
    },
    {
      ring_type_heading: 'Gem line',
      ring_buttons: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Y1fc_2CkWIq7itufZ4WAPpgtvR5iNNHlutLk5S2c9A84Uazv',
       
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX5hRGkFirnv_haOLqkAWMGg0b1VdEgJFbmlqDdXVeLH-P0v2',
         ],
    },
    {
      ring_type_heading: 'Material',
      ring_buttons: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3Y1fc_2CkWIq7itufZ4WAPpgtvR5iNNHlutLk5S2c9A84Uazv',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsdZTw_3ccIL3CP0_0PYzcPdiBCPXLgABlPIGCQim6dC79N-N0',
         'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9k7qfmbfVtSjrwYPfodkkuAWMkhRoOX6FNG0TTi3nu91jsEuV'],
    },
  ];

 


  return (
    <div className='main-container'>
      <div className="ring-image">
      <div className="ring-container">
        <div className="image-wrapper">
              <img 
                  id="ringBase" src={ringBase} 

              />
        </div>
              {/* <img id="ringGem" src={gem} alt="Ring Gem" /> */}
      </div>
      </div>
      <div className="ring-features">
        {ring_data.map((ring, index) => (
          <div key={index} className="ring-type-container">
            <div className="ring-type-container-title">{ring.ring_type_heading}</div>
            <div className="ring-type-buttons">
              {ring.ring_buttons.map((btn, btnIndex) => (
                <div key={btnIndex} className="ring-type-button" id={`ring-type-button-${btnIndex + 1}`}  
                    // onClick={() =>
                    //     ring.ring_type_heading === 'Ring Shape'
                    //     ? changeRingType(btn)
                    //     : ring.ring_type_heading === 'Gem Type'
                    //     ? changeGemType(btn)
                    //     : ring.ring_type_heading === 'Material'
                    //     ? changeRingType(btn)
                    //     : null
                    // } 
                    onClick={()=>changeRingType(btn)}
                >
                  <img src={btn} alt={`${btnIndex + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* material */}
          <div  className="ring-type-container">
            <div className="ring-type-container-title">Material</div>
            <div className="ring-type-buttons">
                <div  className="ring-type-button" id={`ring-material-1`}  
                    onClick={()=>changeMaterial('ring-material-1')}
                    style={{backgroundColor:'silver'}}
                    >
                  
                </div>
                <div  className="ring-type-button" id={`ring-material-2`}  
                    onClick={()=>changeMaterial('ring-material-2')}
                    style={{backgroundColor:'gold'}}
                    >
                  
                </div>
                <div  className="ring-type-button" id={'ring-materail-3'}  
                    onClick={()=>changeMaterial('ring-material-3')}
                    style={{backgroundColor:' #e39780'}}
                >
                  
                </div>
            </div>
          </div>
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
