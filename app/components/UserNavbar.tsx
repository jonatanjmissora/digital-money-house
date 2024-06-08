import { useEffect, useState } from "react";

const LOCALHOST = 'http://localhost:3000/';

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export default function UserNavbar() {

    const [userName, setUserName] = useState<{firstname: string, lastname: string}>({firstname: "", lastname:""})
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${LOCALHOST}/api/user`)
            const response = await res.json()
            setUserName({firstname: response.firstname, lastname: response.lastname})
        }
        getData()

    }, [])


    return (
        
        <div className="flex gap-3 justify-center items-center">
          <button
            
            className="nav-btn bg-primary border-primary rounded-xl px-2"
            >
            JM
          </button>
          <span className="text-white">Hola, {userName.firstname} {userName.lastname}</span>
        </div>
    )
}