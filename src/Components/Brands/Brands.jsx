import React, { useContext, useEffect, useState } from "react";
import styles from './Brands.module.css'
import { CounterContext } from "../../Context/Counter";
import { Helmet } from "react-helmet";
import axios from "axios";

const Brands = () => {
    // let {Counter,increase} = useContext(CounterContext)

    const [allBrands, setAllBrands] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function getBrands() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        // setBrands(data.data);
        setAllBrands(data.data)
        setIsLoading(false)

    }

    useEffect(() => {
        getBrands()
    }, [])


    return (
        <>
            <Helmet>
                <title>Brands</title>
            </Helmet>

            <h2 className="text-main text-center h1 mt-4">
                All Brands
                {/* {Counter} */}
            </h2>
            {/* <button onClick={increase} className="btn btn-danger">Click</button> */}
            <div className="container py-5">
                <div className="row g-4">
                    {allBrands.map(data => <div className="col-md-3">
                      <div className="border card px-3">
                        <img src={data.image} className="w-100" height={200} alt="" />
                        <h5 className="text-center mb-5 fs-6">{data.name}</h5>
                    </div>
                    </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default Brands;




// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import axios from "axios";

// import styles from './Brands.module.css';
// import Loader from "../Loader/Loader";

// const Brands = () => {
//   const [allBrands, setAllBrands] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   async function getBrands() {
//     try {
//       const response = await axios.get(
//         "https://ecommerce.routemisr.com/api/v1/brands"
//       );
//       console.log(response.data); // Log the data received from the API
//       if (Array.isArray(response.data)) {
//         setAllBrands(response.data);
//       } else {
//         setAllBrands([]);
//       }
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching brands:", error);
//       setError(error.message);
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     getBrands();
//   }, []);

//   console.log(allBrands); // Log the value of allBrands

//   if (isLoading) {
//     return <Loader/>; // Render a loading state while data is being fetched
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Render an error message if there's an error fetching the data
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Brands</title>
//       </Helmet>

//       <h2 className="text-main text-center h1 mt-2">
//         All Brands
//         {/* {Counter} */}
//       </h2>

//       {/* <button onClick={increase} className="btn btn-danger">Click</button> */}

//       <div className="container py-5">
//         <div className="row">
//           {allBrands.map(data => (
//             <div className="col-md-3" key={data.id}>
//               <img src={data.image} className="w-100" height={200} alt={data.name} />
//               <h5>{data.name}</h5>
//               <h4 className="text-main">mayaaaan</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brands;