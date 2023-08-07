import React, { createElement, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const DayGraph = () => {
    const { daySelected } = useContext(GlobalContext)
    // const dummyArr = new Array(24).fill(<table></table>);
    const post = "fhad"
    const weeks = {
        0: '',
        1: 'SUN',
        2: 'MON',
        3: 'TUE',
        4: 'WED',
        5: 'THU',
        6: 'FRI',
        7: 'SAT'
    }

    const times = {
        0: '',
        1: '1 AM',
        2: '2 AM',
        3: '3 AM',
        4: '4 AM',
        5: '5 AM',
        6: '6 AM',
        7: '7 AM',
        8: '8 AM',
        9: '9 AM',
        10: '10 AM',
        11: '11 AM',
        12: '12 PM',
        13: '1 PM',
        14: '2 PM',
        15: '3 PM',
        16: '4 PM',
        17: '5 PM',
        18: '6 PM',
        19: '7 PM',
        20: '8 PM',
        21: '9 PM',
        22: '10 PM',
        23: '11 PM',
        24: '12 AM',
    }

    const Page = {
        title: "Articles",
        weeks: new Array(8).fill(weeks),
        times: new Array(24).fill(times),
        posts: new Array(24).fill(post),
        totalPosts: 50
    }

    const clickPosition = (i, weekInd) => {
        console.log('pressed', i, weekInd)
    }

    const { posts, weeks: week, times: time } = Page
    return (
        <div className='overflow-auto'>
            <div className='flex flex-row fixed bg-white'>
                {week.map((v, i) => {
                    return (
                        <table>
                            <tr>
                                {/* <tr> */}
                                {/* <td className='border p-5 text-center w-[130px]'>{v[i]}</td> */}
                                <td className='border p-5 text-center w-[8.4em]'>{v[i]}</td>
                            </tr>
                        </table>
                    )
                })}
            </div>
            <div className='mt-8'>
                {time.map((v, i) => {
                    return (
                        <table>
                            <tr className='overflow-y-scroll'>
                                {/* <td className='border-b-[1px] p-5 pt-11 text-center w-[135px]'>{v[i]}</td> */}
                                <td className='border-b-[1px] p-4 text-center w-[135px]'>{v[i]}</td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-red-100' onClick={() => clickPosition(i, "SUN")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "MON")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "TUE")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "WED")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "THU")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "FRI")}></td>
                                <td className='border w-[8.8em] cursor-pointer hover:bg-gray-100' onClick={() => clickPosition(i, "SAT")}></td>
                                {/* <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td>
                                <td className='border w-[147px]'></td> */}
                            </tr>
                        </table>
                    )
                })}
            </div>
        </div>
    )
}

export default DayGraph;