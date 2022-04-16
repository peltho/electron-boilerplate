import React from "react"
import { ChatAltIcon, EyeIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/solid'

const App = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">💖 Welcome back Thomas!</h1>
            <div className="card">
                <div className="flex flex-row mb-5">
                    <div className="mr-3 basis-1/8">
                        <img className="object-cover rounded-full w-10 h-10" src={"/assets/images/profile_image.png"} />
                    </div>
                    <div className="text-sm">
                        <p className="font-bold">Ada Lovelace</p>
                        <p className="text-slate-500">December 9 at 11:43 AM</p>
                    </div>
                </div>

                <div className="inline-block">
                    <p className="support">Cinema</p>
                    <h3 className="text-lg heading mb-2">What would you..</h3>
                    <p className="">Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what we could have otherwise been one of the best businesses of our generation.</p>
                </div>

                <div className="mt-5 flex flex-row">
                    <ThumbUpIcon className="h-5 w-5 text-gray-400"/><div className="mx-2 text-sm font-bold mr-10">29</div>
                    <ChatAltIcon className="h-5 w-5 text-gray-400" /><div className="mx-2 text-sm font-bold mr-10">11</div>
                    <EyeIcon className="h-5 w-5 text-gray-400"/><div className="mx-2 text-sm font-bold mr-10">2.9k</div>
                    <ShareIcon className="h-5 w-5 text-gray-400"/><div className="mx-2 text-sm font-bold">Share</div>
                </div>
            </div>
        </div>
    )
}

export default App