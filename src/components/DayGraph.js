import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const DayGraph = () => {
    const { daySelected } = useContext(GlobalContext)
    return (
        <div className='ml-4'>
            <table>
                <tr>
                    <td className='border-r-1'>GMT+05</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>1AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>2AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>3AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>4AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>5AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>6AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>7AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>8AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>9AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                <td className='border-right-1'>10AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>11AM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>12PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>1PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>2PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>3PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>4PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>5PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>6PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>7PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>8PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>9PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>10PM</td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                    <td className='border p-5 pr-20' style={{width:'140px'}}></td>
                </tr>
                <tr>
                    <td className='border-right-1'>11PM</td>
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