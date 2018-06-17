import React from 'react';

let Loading=()=>{
     return (
         <div className='loading'>
             <svg viewBox="0 0 24 30" version="1.1" width="24" height="30" aria-hidden="true">
                 <rect x="0" y="10.3333" width="4" height="10.3333" fill="#e0a80d">
                 <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
                 <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
             </rect>
                 <rect x="10" y="11.6667" width="4" height="7.66667" fill="#e0a80d">
                     <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                     <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
                 </rect>
                 <rect x="20" y="7.66667" width="4" height="15.6667" fill="#e0a80d">
                 <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
                 <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
             </rect></svg>
         </div>
     )
 };
 export default Loading