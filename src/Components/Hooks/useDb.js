import {useState, useEffect} from 'react';

export const useDb = (database) => {
    const [db, setdb] = useState(null);

    useEffect(() => {
        const dbref = database.ref('goods');
        dbref.on('value', snapshot => {
            setdb(snapshot.val())
        })
    }, [database])

    return db;
}