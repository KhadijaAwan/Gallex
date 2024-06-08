'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [searchItem, setSearchItem] = useState('')
    const router = useRouter()

    const searchData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/result/${searchItem}`)
        setSearchItem('')
    }

    return (
        <form className="flex justify-center md:justify-between" onSubmit={searchData}>
            <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder='Search'
                className="bg-blue-50 py-[5px] px-3 w-[270px] text-lg font-medium placeholder:text-slate-400 focus:outline-none border-2 border-blue-950 focus:border-2 focus:border-blue-300 sm:w-80 rounded-xl text-blue-900"
            />
        </form>
    )
}