'use client'
import { CommunityType } from "@/app/types";
import Image from "next/image";
import placeholder from '../../../../public/placeholder.jpg'
import { useState } from "react";
/**
 * 
 * @prop {string} id The unique identifier for the community. Not needed here but could be useful in future implementations  
 * @prop {string} name The name of the Community
 * @prop {string} imgUrl The URL to the image to display
 * @prop {string} group The Quadrant of the ciry the community is located
 * @prop {averageHomeCost} number The Average cost of the homes in the community
 * @returns {JSX.Element} The community component card
 */
const Community: React.FC<CommunityType> = ({ id, name, imgUrl, group, averageHomeCost }) => {
    //State to handle image Error
    const [error, setError] = useState(false);
    return (
        <div className="flex justify-center">
            <div className='flex flex-col rounded-lg shadow-md overflow-hidden w-full h-full'>
                <Image width={600} height={500} src={!error ? imgUrl : placeholder} alt={`Picture of ${name}`} onError={() => setError(true)} className='w-full h-72 object-cover'></Image>
                <div className="flex flex-col p-4 bg-gray-800 text-white opacity-75">
                    <h2 className="font-bold text-lg">Community Name: {name}</h2>
                    <h2 className="text-sm mb-2">Quadrant: {group}</h2>
                    <h2 className="font-bold text-base">Average Home Price: {averageHomeCost ? `$` + averageHomeCost?.toFixed(2) : 'No Data Currently'}</h2>
                </div>
            </div>
        </div>
    )
}

export default Community;