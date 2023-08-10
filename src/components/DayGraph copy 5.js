import React, { useState, useContext, useEffect, Fragment } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs';

const DayGraph = () => {

  const {setShowEventModal, setDaySelected, setHour, setWeek, setColoredBox, coloredBox, savedEvents} = useContext(GlobalContext)

    const [hourG, setHourG] = useState();
    const [dayG, setDayG] = useState();
  
  useEffect(() => {
    window.addEventListener("click", (e) => {
      let savedEvents = JSON.parse(localStorage.getItem("savedEvents")) 
    console.log('ee|',savedEvents[0]?.title)
    let boxSelected = +e?.target?.classList[0]?.toString()?.replace(/^\D+/g, '');
      
      if (e.target.className.includes("box")) {

        if (!e.target.className.includes("bg-cyan-300")) {
          setShowEventModal(true)
          return e.target.className = boxSelected+" box border p-5 text-center w-[8.4em] bg-cyan-300 m-0"
        } 
          console.log("falseee", e.target.className);
          setShowEventModal(false)
         return e.target.className = boxSelected+" box border p-5 text-center w-[8.4em] cursor-pointer text-transparent";     
      }
      console.log('final log', e.target.className)
    });
  },[]);

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

    const selectHrWk = (d, hr, wk, ii) => {
      // setColoredBox(bx => [...bx, d-1])
      // setColoredBox(bx => [...bx, {hr, wk}])
      console.log('i, ii',d,ii);
      let datee = dayjs().set('day', d-1)
      setColoredBox(bx => [...bx, {hr, wk, datee,d,ii}])
      setHour(hr)
      setWeek(wk)
      setDaySelected(dayjs().set('day', d-1))
      console.log('coloredBox|',coloredBox);
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

                                      // i==0 
                                      //   ?
                                      //  <td key={ii} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer`}>{t[ii]}</td>
                                      //   :
                                      //   <td key={ii} onClick={()=>selectHrWk(i, t[ii],w[i],ii)} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}{' - '}{(+t[ii].slice(0,2)+1)}{' '+t[ii].slice(2,)}</td>

// {console.log('savedEvents',savedEvents[ii%3]?.d===ii,savedEvents[ii%3]?.ii===ii)}
// {console.log('savedEvents',(savedEvents[i%2]?.wk === w[i] && savedEvents[i%2].hr === t[ii] ))}
// {console.log('savedEvents',(savedEvents[i%2]?.wk === w[ii] && savedEvents[ii%2]?.ii===i))}
// {console.log(`${savedEvents[ii%2]?.wk} === ${w[i]}, ${savedEvents[ii%2]?.ii}===${i}`,(savedEvents[i%2]?.wk === w[ii], savedEvents[ii%2]?.ii===i))}
// {console.log(savedEvents[ii%2]?.wk === w[i] && savedEvents[ii%2]?.ii===t[i])}
// {console.log(`${savedEvents[ii%2]?.wk} === ${w[i]}, ${savedEvents[ii%2]?.ii}===${i}`)}
// console.log(w[i], t[i])
// console.log(`${savedEvents[ii%2]?.wk} === ${w[i]}, ${savedEvents[ii%2].hr} === ${i}`)
// console.log(`${savedEvents[ii%2]?.wk} === ${w[i]}, ${savedEvents[ii%2]?.hr}===${t[i+1]}`)
// console.log(`${savedEvents[ii%2]?.hr}===${t[i+1]}`, savedEvents[ii%2]?.hr===t[i+1])
// console.log(`${savedEvents[ii%2]?.wk} === ${w[i]}`, savedEvents[ii%2]?.wk === w[i])

// console.log(savedEvents[ii%2]?.wk === w[ii] && savedEvents[ii%2]?.hr===t[ii+1])

// console.log(savedEvents[ii]?.wk === w[ii] && savedEvents[ii]?.hr===t[ii])

// console.log(`${savedEvents[ii]?.wk} === ${w[ii]}`, savedEvents[ii]?.wk === w[ii], `${savedEvents[ii]?.hr} === ${t[ii]}`, savedEvents[i]?.hr === t[i], '||||||||', savedEvents[i]?.wk === w[i] && savedEvents[ii]?.hr === t[ii])
// console.log((savedEvents[ii]?.hr===t[ii], savedEvents[ii]?.hr===t[ii]))

// console.log('savedEvents.elngth', savedEvents[savedEvents.length-1])
// console.log('savedEvents.elngth', savedEvents[savedEvents.length])
// console.log('savedEvents.elngth', savedEvents[savedEvents.length]?.wk === w[i] && savedEvents[savedEvents.length]?.hr === t[ii])

// console.log('(savedEvents[savedEvents.length-1]?.wk === w[i] && savedEvents[savedEvents.length-1]?.hr === t[ii])',(savedEvents[savedEvents.length-1]?.wk === w[ii] && savedEvents[savedEvents.length-1]?.hr === t[i]))

                                      i==0 
                                        ?
                                       <td key={ii} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer`}>{t[ii]}</td>
                                        :
                                        // (savedEvents[i%2]?.d === i && savedEvents[i%2].ii === ii ) 
                                        // (savedEvents[i%2]?.wk === i && savedEvents[i%2].hr === ii ) 
                                        // (savedEvents[i%2]?.wk === w[ii] && savedEvents[ii%2]?.ii===i)
                                        // (savedEvents[ii%2]?.wk === w[ii] && savedEvents[ii%2]?.hr===t[i+1])
                                        // (savedEvents[ii]?.wk === w[ii] && savedEvents[ii]?.hr===t[ii])

                                        (savedEvents[savedEvents.length-1]?.wk === w[i] && savedEvents[savedEvents.length-1]?.hr === t[ii])
                                        ?
                                        <td key={ii} onClick={()=>selectHrWk(i, t[ii],w[i],ii)} className={`box${t[ii]} box border p-5 text-center w-[8.4em] bg-sky-500 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}{' - '}{(+t[ii].slice(0,2)+1)}{' '+t[ii].slice(2,)}</td>
                                        :
                                        <td key={ii} onClick={()=>selectHrWk(i, t[ii],w[i],ii)} className={`box${t[ii]} box border p-5 text-center w-[8.4em] hover:bg-gray-100 hover:scale-110 transition-transform cursor-pointer text-transparent`}>{t[ii]}{' - '}{(+t[ii].slice(0,2)+1)}{' '+t[ii].slice(2,)}</td>
                                        
                                        
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