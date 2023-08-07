import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const DayGraph = () => {
    const { daySelected } = useContext(GlobalContext)
    return (
        <div className='ml-4 overflow-y-scroll'>
            <table>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2 text-center'>GMT+05</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>SUN</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>MON</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>TUE</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>WED</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>THU</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>FRI</td>
                    <td className='border p-5 text-center' style={{width:'140px'}}>SAT</td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>1 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>2 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>3 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>4 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>5 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>6 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>7 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>8 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>9 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                <td className='border-b-[1px] pr-2'>10 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>11 AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>12 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>1 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>2 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>3 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>4 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>5 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>6 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>7 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>8 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>9 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>10 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>11 PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
            </table>
        </div>
    )
}

export default DayGraph;