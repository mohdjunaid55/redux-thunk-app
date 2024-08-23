import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./redux/action/country.action";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container mb-4">
      <div className="row">
        {countries.length > 0 &&
          countries.map((country, index) => (
            <div className="col-sm-3 mt-4" key={index}>
              <div className="card">
                <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
