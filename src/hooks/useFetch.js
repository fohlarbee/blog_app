import { useEffect,useState } from "react";

const useFetch = (uri) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

        useEffect(() => {
            const abortCont = new AbortController();
            setTimeout(() => {
                fetch(uri, {signal:abortCont.signal})
                .then((res) => {
                    if(!res.ok)
                         throw Error('Could not fetch data');
                     return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setIsError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError') return;
                    // console.log(err.message);
                    setIsError(err.message);
                    setIsLoading(false);
                })  
            }, 1000);
           return () => abortCont.abort();
        },[uri]);
        return {data,isLoading, isError, setData};
}

export default useFetch;