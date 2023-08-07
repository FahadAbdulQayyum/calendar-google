import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const DayGraph = () => {
    const { daySelected,
        setShowEventModal,
        setHour,
        setWeek
    } = useContext(GlobalContext)
    const positionPressed = (time, wk) => {
        console.log(time + ', ' + wk + ' pressed');
        setShowEventModal(true)
        setHour(time)
        setWeek(wk)
        console.log('document.DOCUMENT_NODE',document.DOCUMENT_NODE)
    }
    return (
        <div className='ml-4 overflow-y-scroll'>
            <table>
                <tr className="text-xs text-left fixed">
                    <td className='border-b-[1px] text-center bg-white pr-2' style={{ fontSize: '9px', marginTop: '10px' }}>GMT+05</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>SUN</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>MON</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>TUE</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>WED</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>THU</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>FRI</td>
                    <td className='border p-5 text-center bg-white' style={{ width: '140px' }}>SAT</td>
                </tr>
                <tr>
                    <td className='border-b-[1px]' style={{ paddingTop: '55px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>1 AM</td>
                    <td onClick={() => positionPressed('1 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>2 AM</td>
                    <td onClick={() => positionPressed('2 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>3 AM</td>
                    <td onClick={() => positionPressed('3 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>4 AM</td>
                    <td onClick={() => positionPressed('4 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>5 AM</td>
                    <td onClick={() => positionPressed('5 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>6 AM</td>
                    <td onClick={() => positionPressed('6 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>7 AM</td>
                    <td onClick={() => positionPressed('7 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>8 AM</td>
                    <td onClick={() => positionPressed('8 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>9 AM</td>
                    <td onClick={() => positionPressed('9 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>10 AM</td>
                    <td onClick={() => positionPressed('10 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>11 AM</td>
                    <td onClick={() => positionPressed('11 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>12 PM</td>
                    <td onClick={() => positionPressed('12 AM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('12 AM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>1 PM</td>
                    <td onClick={() => positionPressed('1 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('1 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>2 PM</td>
                    <td onClick={() => positionPressed('2 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('2 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>3 PM</td>
                    <td onClick={() => positionPressed('3 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('3 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>4 PM</td>
                    <td onClick={() => positionPressed('4 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('4 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>5 PM</td>
                    <td onClick={() => positionPressed('5 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('5 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>6 PM</td>
                    <td onClick={() => positionPressed('6 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('6 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>7 PM</td>
                    <td onClick={() => positionPressed('7 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('7 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>8 PM</td>
                    <td onClick={() => positionPressed('8 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('8 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>9 PM</td>
                    <td onClick={() => positionPressed('9 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('9 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>10 PM</td>
                    <td onClick={() => positionPressed('10 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('10 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
                <tr className="text-xs text-left">
                    <td className='border-b-[1px] pr-2'>11 PM</td>
                    <td onClick={() => positionPressed('11 PM', 'SUN')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'MON')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'TUE')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'WED')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'THU')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'FRI')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                    <td onClick={() => positionPressed('11 PM', 'SAT')} className='border p-5 pr-20' style={{ width: '140px' }}></td>
                </tr>
            </table>
        </div>
    )
}

export default DayGraph;