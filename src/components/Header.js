import React, { useContext } from 'react'
import { data } from '../datas/Context'


const Header = () => {
    let { handleCallApi, datails, userInput, setuserInput, temperature, weather, description, placeName, wetImg, day, loading, errors, loder } = useContext(data)
    return (
        <main style={{backgroundImage:URL}} className='px-[24px] py-[32px]   bg-white rounded-xl flex flex-col items-center  w-full max-w-[500px]  h-fit '>
            {/* min-h-[500px] */}
            <h1 className='font-bold text-[24px] sm:text-[32px]'>{datails.Title}</h1>

            <input type="text" className='border rounded shadow-sm mt-4 focus:outline-none px-2 py-2  w-[70%]' value={userInput} onChange={(event) => setuserInput(event.target.value)} />

            <button className='bg-[#2196F3] px-2 py-1 rounded  mt-4 text-white' onClick={handleCallApi}>
                {datails.btn}
            </button>



            {errors !== "" && <p className='mt-4'>{errors}</p>}

            {placeName !== "" && <p className='font-bold text-[20px] mt-2 capitalize'>{` ${placeName}`}</p>}

            {day !== "" && <p className='text-red-500 font-semibold capitalize mt-1'>{`  ${day}`}</p>}


            {wetImg !== "" && <img src={wetImg.id} alt="" className={` mt-2 ${wetImg.id ? "max-h-32" : "h-0"}`} />}

            {weather !== "" && <p className='font-semibold mt-2'>{`  ${weather}`}</p>}



            {temperature !== "" && <p className=' font-semibol text-[24px] mt-2' >{`  ${temperature}`}</p>}

            {description !== "" && <p className='font-semibold text-red-500 mt-2  '>{` ${description} `}</p>}




            {loading && loder}




        </main>
    )
}

export default Header