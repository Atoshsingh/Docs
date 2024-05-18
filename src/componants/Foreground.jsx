import React,{useRef} from 'react'
import Background from './Background'
import Cards from './Cards';


function Foreground() {
    
      const data=[
      {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing. Aashutosh Singh",
        filesize:".9mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Download Now" , tagColor:"green"},
      },
      {
        desc:"Wanna go mall",
        filesize:".3mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Upload" , tagColor:"yellow"},
      },
      {
        desc:"Having dinner in canada!",
        filesize:"1.4mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Slots" , tagColor:"sky"},
      },
    ];

    const ref = useRef(null);
  return (
        <div ref={ref} className='p-5 fixed top-0 left-0 z-[3] w-full  h-full flex gap-10 flex-wrap'>
            {/* <Cards/> */}
            {/* <Cards/> */}
            {data.map((item , index)=>(
              <Cards data={item} refrence={ref}/>
            ))}
        </div>
  )
}

export default Foreground;
