import React, { useState, useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     // console.log("eee", e.target.className);
  //     console.log('e|', e.target.className.slice(4,9))
  //     let boxSeleted = e.target.className.slice(4,9);
  //     if (e.target.className.includes("box")) {
       

  //       if (!e.target.className.includes("bg-gray-300")) {
  //         console.log("trueeee", e.target.className);
  //         return e.target.className = boxSeleted+" box bg-gray-300 h-5 w-5 m-2"
  //       } 
  //         console.log("falseee", e.target.className);
  //         return e.target.className = boxSeleted+" box bg-sky-500 h-5 w-5 m-2";     
  //     }
  //     console.log('final log', e.target.className)
  //   });
  // }, []);

//   return (
//     <div>
//       <div className="box box0 bg-sky-500 h-5 w-5 m-2"></div>
//       <div className="box box1 bg-sky-500 h-5 w-5 m-2"></div>
//       <div className="box box2 bg-sky-500 h-5 w-5 m-2"></div>
//       <div className="box box3 bg-sky-500 h-5 w-5 m-2"></div>
//       <div className="box box4 bg-sky-500 h-5 w-5 m-2"></div>
//       <div className="box box5 bg-sky-500 h-5 w-5 m-2"></div>
//     </div>
//   );
// };

const DayGraph = () => {
  
  useEffect(() => {
    window.addEventListener("click", (e) => {
      // console.log("eee", e.target.className);
      console.log('e|', e.target.className.slice(4,9))
      let boxSeleted = e.target.className.slice(4,9);
      if (e.target.className.includes("box")) {
       

        if (!e.target.className.includes("bg-cyan-300")) {
          console.log("trueeee", e.target.className);
          // return e.target.className = boxSeleted+" box border p-5 text-center w-[8.4em] bg-cyan-300 h-5 w-5 m-2"
          return e.target.className = boxSeleted+" box border p-5 text-center w-[8.4em] bg-cyan-300 m-0"
        } 
          console.log("falseee", e.target.className);
          // return e.target.className = boxSeleted+" box bg-sky-500 h-5 w-5 m-2";     
          // return e.target.className = boxSeleted+" box hover:text-cyan-100 cursor-pointer";     
          // return e.target.className = boxSeleted+" box border p-5 text-center w-[8.4em] hover:text-cyan-100 cursor-pointer";     
          return e.target.className = boxSeleted+" box border p-5 text-center w-[8.4em] hover:text-cyan-100 cursor-pointer";     
      }
      console.log('final log', e.target.className)
    });
  }, []);

    // const [day, setDay] = useState();
    // const [index, setIndex] = useState();
    const [day, setDay] = useState([]);
    const [index, setIndex] = useState([]);

    const [changeBG, setChangeBG] = useState(false);

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

    const { posts, weeks: week, times: time } = Page
    return (
        <div className='overflow-auto'>
            <div className='flex flex-row fixed bg-white'>
                {week.map((v, i) => {
                    return (
                        <>
                            <table key={i}>
                                <tr>
                                    {/* <tr> */}
                                    {/* <td className='border p-5 text-center w-[130px]'>{v[i]}</td> */}
                                    <td className='border p-5 text-center w-[8.4em]'>{v[i]}</td>
                                </tr>
                                <tr className='flex flex-col text-center'>
                                    {time.map((v, ii) => 
                                        // <td key={ii} className={((v[ii]===day && i === index) && changeBG) && 'selectElement hover:text-gray-100 cursor-pointer' } onClick={(e) => clickPosition(e, v[ii],i)}>{v[ii]}</td>
                                        // <td key={ii} className={'box box0 bg-sky-500 h-5 w-5 m-2'}></td>
                                        <td key={ii} className={`box box${v[ii]} border p-5 text-center w-[8.4em] hover:text-gray-100 cursor-pointer`}></td>
                                 )}
                                </tr>
                            </table>
                            <table>
                            </table>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default DayGraph;