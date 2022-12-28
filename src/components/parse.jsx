import React, {useEffect, useState} from 'react';
import { data1 } from '../assets/json/export.js';
import { address } from '../assets/json/address.js';

const Parse = () => {

    const [matches, setMatches] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setMatches(
            address.map((item) => {
                const matchingData = data1.filter((item1) => item1.name.split('(')[1].split(')')[0] === item.id.toString());
                return  [matchingData, item];
            })
        );
    }, [address, data1]);

    useEffect(() => {
        setFiltered(matches.filter((item) => item[0].length > 0));
    }, [matches]);

    console.log(filtered);
    return (
        <div>
            {filtered.map((item) => (
              <div key={item[1].id}>
                  <p>{ item[1].id }</p>
                  <p>{ item[1].email }</p>
                  <p>{ item[0].length }</p>
              </div>
            ))}
        </div>
    );
};

export default Parse;