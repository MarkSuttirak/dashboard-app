import React from 'react'
import { useQuery } from 'react-query'
import { getCountryList } from '../../client/api'

const CountrySelect = ({
    label,
    name,
    value,
    onChange,
    error,
}) => {
    const { data } = useQuery('countries', getCountryList)
    return (
        <>
            {
                label && (
                    <label htmlFor={name} className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">{label}<span className="required">*</span></label>
                )
            }
            <div className="w-full">
                <select
                    name={name}
                    onChange={onChange}
                    value={value}
                    className="mt-1 block h-[34px] w-full rounded-md border-gray-300 py-2 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                    {
                        (data?.message ?? []).map((country) => (
                            <option key={country.code} value={country.name}>{country.name}</option>
                        ))
                    }
                </select>
                {
                    error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                    )
                }
            </div>
        </>
    )
}

export default CountrySelect