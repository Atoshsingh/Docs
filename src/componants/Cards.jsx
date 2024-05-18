import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion"


function Cards({ data ,refrence} ) {
    return (

        <motion.div drag dragConstraints={refrence} dragElastic={1} whileDrag={{scale:1.2}} className="relative text-white w-60 h-80 flex-shrink-0 rounded-[45px] bg-zinc-900/90 py-10 px-8 overflow-hidden ">
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0 '>

                <div className="flex item-center justify-between mb-2 py-3 px-8">
                    <h4>{data.filesize}</h4>
                    <span className='w-5 h-5 py-1  rounded-full flex item-center justify-center'>
                        {data.close ? <AiOutlineCloseCircle /> : <MdOutlineFileDownload size=".7em" color='#fff' />}

                    </span>
                </div>

                {/* {
                            data.tag.isOpen ? <div className='tag w-full py-4 bg-green-600 flex item-center justify-center'>
                            <h3 className='text-sm font-semibold' >Download now</h3>
                        </div> : null

                        } */}
                {
                    data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagColor==="yellow" ?'bg-yellow-600': 'bg-green-600'} flex item-center justify-center`}>
                        <h3 className='text-sm font-semibold' >{data.tag.tagTitle}</h3>
                    </div>

                }
            </div>
        </motion.div>

    )
}

export default Cards
// npm install react-icons --save  // website - react incos
// npm install framer-motion // for motion or slids website - framer motion 
