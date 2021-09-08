import { useState, useEffect } from 'react';


const STORAGE_KEY = 'itss';

function useCustomHook() {
    const [names, setNames] = useState(["Huyen", "Hoa", "Hung", "Long"]);


    useEffect(() => {
        const data = window.localStorage.getItem(STORAGE_KEY);
    
        if (!data) {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        } else {
          setNames(JSON.parse(data));
        }
        console.log(names);
      }, []);

      const putNames = (names) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
        setNames(names);
      };

    const printName = () => {
    };

    const add = () => {

    }

    return [names, printName, add, putNames];
}

export default useCustomHook;