import React, { useEffect, useState } from 'react'

const Topgainers = () => {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-ranker.herokuapp.com/api/topgainers`)
          .then((res) => res.json())
          .then((data) => {
    
            setPics(data.result);
          });
      }, []);

    return (
        pics.length > 0 ? (
          pics.map((item) => {
            return (   
              <div key={item.overallrank}>
               
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4 card">
                    
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Overall Rank : </b> {item.overallrank}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Name :</b> {item.name}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                      <b>Price :</b>   {item.price}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>1 Day Change : </b> {item.onedaychange}
                    </h6>
                    <h6 style={{ paddingLeft: "10px", paddingTop: "10px" }} className="text">
                       <b>Volume Traded in One day:</b>  {item.volumetradedinoneday}
                    </h6>
                </div>
                    
                <div className="col-4">
                    
                </div>
                </div>
                </div>
            );
          })
        ) : (
            <div className="loading" >
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwp-technique.com%2Floading%2Floading.gif&f=1&nofb=1" alt="Loading.." width="80px" height="80px" />
         </div>
        )
    )

}

export default Topgainers 