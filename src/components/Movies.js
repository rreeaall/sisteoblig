import { useState, useEffect } from 'react';

const Movies = ({ title, actor }) => {
    
const [data, setData] = useState("")

const getData = async = () =>{
    const dddata = await resonse.json()
    setData(dddata)
}

useEffect(() => {
    getData(title, actor, data)
}, [title, actor, data]);

}

export default Movies;