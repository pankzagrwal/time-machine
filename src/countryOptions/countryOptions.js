/*global chrome*/
import "./countryOptions.css";
import React from 'react';
import RemoveCountry from './removeCountry';
import zone from './countries.js';



const countryList = zone.reduce(function (acc, item) {
    return {
        ...acc,
        [item.name]: item
    }
}, {})

const CountryOptions = () => {
    const [country, setCountry] = React.useState('');
    const [tz, setTZ] = React.useState('');

    const countries = Object.keys(countryList);
    const [gradientColor1, SetGradientColor1] = React.useState({})

    const [gradientColor2, SetGradientColor2] = React.useState({})
  
    const [direction, setDirection] = React.useState();
  
  
    React.useEffect(() => {
  
      const direction = Math.round(Math.random() * 360);
  
      const r1 = Math.round(Math.random() * 255);
      const g1 = Math.round(Math.random() * 255);
      const b1 = Math.round(Math.random() * 255); 
      const a1 = Math.round(Math.random() * 10) / 10;
  
      const r2 = Math.round(Math.random() * 255);
      const g2 = Math.round(Math.random() * 255);
      const b2 = Math.round(Math.random() * 255); 
      const a2 = Math.round(Math.random() * 10) / 10;
  
      SetGradientColor1({
        r1,
        g1,
        b1,
        a1
      })
  
      SetGradientColor2({
        r2,
        g2,
        b2,
        a2
      })
  
      setDirection(direction)
  
    }, [])


    React.useEffect(() => {
        if (countryList[country]?.timezones?.length === 1) {
            setTZ(countryList[country]?.timezones[0])
        }
    }, [country])

    const addCountryHandler = () => {
        const key = `${country}__${tz}`;
        chrome.storage.sync.get(['countryList'], function(result) {
            const list = result.countryList || {}

            list[key] = countryList[country];

            setTZ('');
            setCountry('');

            chrome.storage.sync.set({countryList: list}, function() {
                console.log('Value is set to ' + list);
            });

        });


    }

    const removeHandler = (key) => {
        chrome.storage.sync.get(['countryList'], function(result) {
            const list = result.countryList || {};
            if (list[key]) {
                delete list[key];
            }
            chrome.storage.sync.set({countryList: list}, function() {
                console.log('Value is set to ' + list);
            });
        });

    }

    return (
        <>
        <div className='country-options'
        style={{
            background: `linear-gradient(${direction}deg, rgba(${gradientColor1.r1},${gradientColor1.g1},${gradientColor1.b1},${gradientColor1.a1}), rgba(${gradientColor2.r2},${gradientColor2.g2},${gradientColor2.b2},${gradientColor2.a2}))`
          }}
        >
            <h3>
                Add Timezone
            </h3>
            <div className='country-list'>
                <select name='countries' onChange={(evt) => {
                    setCountry(evt.target.value);
                    setTZ('')
                }} value={country}>
                    <option value="">--Please choose country--</option>
                    {
                        countries.map((country, index) => {
                            return (
                                <option value={country} key={index}>
                                    {country}
                                </option>
                            )
                        })
                    }
                </select>
                {
                    countryList[country]?.timezones?.length > 1 ? (
                        <select name='countries-timezone' onChange={(evt) => setTZ(evt.target.value)} >
                            <option  value="">--Please choose time zone--</option>
                            {
                                countryList[country].timezones.map((tz, index) => {
                                    return (
                                        <option value={tz} key={index}>
                                            {tz}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    ) : null
                }
                {
                   tz && (
                        <div className="country-timezone">
                            Timezone: {tz}
                        </div>
                    )
                }
                {
                    tz && (
                        <div className="country-timezone-save">
                            <button onClick={addCountryHandler}>
                                Add
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
        <RemoveCountry  removeHandler={removeHandler}/>
        </>
    )

}

export default CountryOptions;