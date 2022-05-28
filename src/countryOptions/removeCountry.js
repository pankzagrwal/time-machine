/*global chrome*/
import  './removeCountry.css';
import React from 'react';
import zone from './countries.js';



const countryList = zone.reduce(function (acc, item) {
    return {
        ...acc,
        [item.name]: item
    }
}, {})





const RemoveCountry = ({
    removeHandler
}) => { 
    const [list, setList] = React.useState([]);
    
    React.useEffect(() => {
        let list = {};
        chrome.storage.sync.get(['countryList'], function(result) {
            list = result.countryList || {}
            const items = Object.keys(list)
            setList(items)
        });
        chrome.storage.onChanged.addListener(function(changes, namespace) {
            const list = changes.countryList.newValue;
            const items = Object.keys(list)
            setList(items)
        });

    }, [])
    

    return (
        <div className='country-remove'>
                {
                    list.map((item, index) => {
                        const [country, timezone] = item.split('__');
                        const obj = countryList[country];
                        return (
                            <div className='country-remove-card' key={index} onClick={() => removeHandler(item)}
                            >
                                <div className='country-name'>
                                    {obj.name}
                                </div>
                                <div className='country-capital'>
                                    {obj.capital}
                                </div>
                                <div className='country-timezone'>
                                    {timezone}
                                </div>
                                <div className='country-remove-cross'>
                                    X
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )

}

export default RemoveCountry;