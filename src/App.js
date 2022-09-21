import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const isMounted = useRef(true);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>  response.json()) 
        .then(data => { 
          setTimeout(() => { 
            if (isMounted.current) {
              setData(data)
              setLoading(false)
            }  
    },3000)
  })
       
return () => {
isMounted.current = false
}
},[isMounted] )

   return loading ? <div>Loading...</div> : <div>{data.title}</div>

}
