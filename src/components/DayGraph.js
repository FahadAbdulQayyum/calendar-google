import React, { useState, useContext, useEffect, Fragment } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs,{weekday} from 'dayjs';

const DayGraph = () => {

  const {setShowEventModal, showEventModal, setDaySelected,daySelected, setHour, setWeek} = useContext(GlobalContext)

    const [hourG, setHourG] = useState();
    const [dayG, setDayG] = useState();
  
  useEffect(() => {
    window.addEventListener("click", (e) => {
    console.log('setHourG, setDayG',hourG, dayG)

      // console.log('e|||', e?.target?.classList[0])
      // console.log('e|||', e?.target?.classList[0].toString().match('/\d+/'))
      console.log('e||||', e?.target?.classList[0].toString().replace(/^\D+/g, ''))
      // e?.target?.classList[0]
      // console.log('e|', e?.target?.className?.slice !== undefined && e?.target?.className?.slice(0,5))
      // let boxSeleted = e?.target?.className?.slice !== undefined && e?.target?.className?.slice(0,5);
      let boxSelected = +e?.target?.classList[0].toString().replace(/^\D+/g, '');
      
      if (e.target.className.includes("box")) {

        if (!e.target.className.includes("bg-cyan-300")) {
          console.log("trueeee", e.target.className);
          setShowEventModal(true)
          // setHour('10 PM')
          // setWeek('Tue')
          return e.target.className = boxSelected+" box border p-5 text-center w-[8.4em] bg-cyan-300 m-0"
        } 
          console.log("falseee", e.target.className);
          setShowEventModal(false)
         return e.target.className = boxSelected+" box border p-5 text-center w-[8.4em] cursor-pointer text-transparent";     
      }
      console.log('final log', e.target.className)
    });
  },[]);

  useEffect(()=>{
    console.log('setHourG, setDayG',hourG, dayG)
  },[setDayG, setDayG])

    // const [day, setDay] = useState();
    // const [index, setIndex] = useState();
    // const [day, setDay] = useState([]);
    const [index, setIndex] = useState([]);

    const [changeBG, setChangeBG] = useState(false);

    // const dummyArr = new Array(24).fill(<table></table>);
    const post = "fhad"
    const weeks = {
        0: '^',
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

    const selectHrWk = (d, hr, wk) => {
      // console.log('hr, wk', hr, wk);
      setHour(hr)
      setWeek(wk)
      // setDaySelected(dayjs())
      console.log('d',d)
      // console.log('dayjs',dayjs().set('date', d))
      console.log('dayjsd',dayjs().set('day', d-1))
      // dayjs.extend(weekday)
      // console.log('dayjs',dayjs().weekday(1))
      // console.log('dayjs',dayjs().day())
      // setDaySelected('7')
      // setDaySelected(dayjs().set('date', 1))
      // setDaySelected(dayjs().weekday(d))
      setDaySelected(dayjs().set('day', d-1))
    }

    const { posts, weeks: week, times: time } = Page
    return (
        <div className='overflow-auto relative'>
            <div className='flex flex-row static'>
                {week.map((w, i) => {
                    return (
                        <Fragment key={i} >
                            <table>
                                <tr>
                                   <td className='border p-5 text-center w-[8.4em] fixed bg-white'>{w[i]}</td>
                                </tr>
                                <tr className='flex flex-col text-center mt-5'>
                                    {time.map((t, ii) => 
                                      i==0 
                                        ?
                                       <td key={ii} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer`}>{t[ii]}</td>
                                        :
                                        // <td key={ii} onClick={()=>setHourG(hr=> t[ii])} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}</td>
                                        <td key={ii} onClick={()=>selectHrWk(i, t[ii],w[i])} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}</td>
                                        // <td key={ii} onClick={()=>console.log('ttt',t[ii])} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}</td>
                                 )}
                                </tr>
                            </table>
                            <table>
                            </table>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default DayGraph;