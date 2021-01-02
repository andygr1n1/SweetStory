import {useState, useEffect} from 'react';

export const useDb = (database) => {
    const [db, setdb] = useState(null);
    console.log('database', database)

    useEffect(() => {
        console.log('USE EFFEVT__________________')
        database.ref('goods').on('value', snapshot => {
            setdb(snapshot.val())
        });

    }, [database])

    return db;
}