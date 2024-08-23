import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");

    let data = await response.json();
    setCountries([...data]);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="container mb-4">
      <div className="row">
        {countries.length > 0 &&
          countries.map((countries, index) => (

            <div className="col-sm-3 mt-4" key ={index}>
              <div className="card">
                <img src={countries.flags.svg} className="card-img-top" alt={countries.name.common} />
                <div className="card-body">
                  <h5 className="card-title">{countries.name.common}</h5>
                 
                </div>
              </div>
            </div>

          ))}
      </div>
    </div>
  );
}

export default App;
