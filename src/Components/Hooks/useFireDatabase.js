import {useEffect, useState} from 'react';

export const useFireDatabase = (database) => {

    const [fireResponse, setFireResponse] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const json = await fetch('DBSweetStory.json');
                const res = await json.json();
                setResponse(res)
            } catch (err) {
                setErr(err);
            }
        })();
    }, []);

    return {fireResponse, err};
}


// const res = useFetch();
// const DBSweet = res.response;
// const ref = firebaseDatabase().ref('goods');
//
// function gotData(data) {
//     console.log('data', data.val())
// }
// function errData(err) {
//     console.log('Error!')
//     console.log(err);
// }
//
// const DBSweet = ref.once('value', gotData, errData );