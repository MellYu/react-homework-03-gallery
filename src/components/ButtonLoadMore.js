import React from 'react';


const ButtonLoadMore = ({clickFunc})=>{
   return (
   <button className="Button" onClick={clickFunc}>Load more...</button>
   )
}

export default ButtonLoadMore;