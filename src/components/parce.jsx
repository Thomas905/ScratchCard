import React, {useEffect, useState} from 'react';
import data1 from '../assets/json/export.json';
import data2 from '../assets/json/address.json';

const Parce = () => {

    const [matches, setMatches] = useState([]);
    const [names, setNames] = useState([]);
    const [counts, setCounts] = useState({});

    useEffect(() => {
        // Créer la table de correspondance
        const matches = [];
        for (const object1 of data1) {
            const object2 = data2.find((item) => item.name === object1.name);
            matches.push({ object1, object2 });
        }
        setMatches(matches);
    }, [data1, data2]);

    useEffect(() => {
        // Créer la liste des noms
        const names = matches.map((item) => item.object2.id + ' ' + item.object1.name + ' ' + item.object2.email);
        setNames(names);
    }, [matches]);

    useEffect(() => {
        // Compter les occurrences de chaque nom
        const counts = {};
        Object.values(names).forEach((value) => {
            if (counts[value]) {
                counts[value]++;
            } else {
                counts[value] = 1;
            }
        });
        setCounts(counts);
    }, [names]);

    return (
        <div>
            {Object.entries(counts).map(([name, count]) => (
                <div key={name}>{`${name}: ${count}`}</div>
            ))}
        </div>
    );
};

export default Parce;