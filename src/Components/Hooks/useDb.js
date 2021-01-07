import {useState, useEffect} from 'react';

export const useDb = (database) => {
    const [db, setdb] = useState(null);


    useEffect(() => {

        database.ref('goods').on('value', snapshot => {
            setdb(snapshot.val())
        });


    }, [database])

    return db;
}