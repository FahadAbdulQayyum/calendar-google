import React, { useEffect } from "react";

const DayGraph = () => {

  useEffect(() => {
    window.addEventListener("click", (e) => {
      // console.log("eee", e.target.className);
      console.log('e|', e.target.className.slice(4,9))
      let boxSeleted = e.target.className.slice(4,9);
      if (e.target.className.includes("box")) {
       

        if (!e.target.className.includes("bg-gray-300")) {
          console.log("trueeee", e.target.className);
          return e.target.className = boxSeleted+" box bg-gray-300 h-5 w-5 m-2"
        } 
          console.log("falseee", e.target.className);
          return e.target.className = boxSeleted+" box bg-sky-500 h-5 w-5 m-2";     
      }
      console.log('final log', e.target.className)
    });
  }, []);

  return (
    <div>
      <div className="box box0 bg-sky-500 h-5 w-5 m-2"></div>
      <div className="box box1 bg-sky-500 h-5 w-5 m-2"></div>
      <div className="box box2 bg-sky-500 h-5 w-5 m-2"></div>
      <div className="box box3 bg-sky-500 h-5 w-5 m-2"></div>
      <div className="box box4 bg-sky-500 h-5 w-5 m-2"></div>
      <div className="box box5 bg-sky-500 h-5 w-5 m-2"></div>
    </div>
  );
};

export default DayGraph;



  // useEffect(() => {
  //   console.log("useEffect is running");
  //   window.addEventListener("click", (e) => {
  //     console.log("eee", e.target.className);
  //     if(e.target.className.includes('box')) {
  //       // e.target.className.toggle('bg-current hover:gray-300 text-white')
  //       // e.target.classList.toggle('bg-current hover:gray-300 text-white')
  //       if(!e.target.className.includes('bg-current hover:gray-300 text-white')){
  //         return e.target.className+= " bg-current hover:gray-300 text-white"
  //       }else {
  //         return e.target.className = ""
  //       }
  //     }
  //   });
  // }, []);


  


 // e.target.className.toggle('bg-current hover:gray-300 text-white')
        // e.target.classList.toggle('bg-current hover:gray-300 text-white')

        // if(!e.target.className.includes('bg-current hover:gray-300 text-white')){
        //   console.log('if condition')
        //   return e.target.className+= " bg-current hover:gray-300 text-white"
        // } else {
        //   console.log('else condition');
        //   return e.target.className += ""
        // }


