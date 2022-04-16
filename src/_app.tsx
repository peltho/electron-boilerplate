import React from "react"
import { ChatAltIcon, EyeIcon, ShareIcon, ThumbUpIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import Menu from "./components/menu"
import Header from "./components/header"

const App = () => {
    return (
        <>
        <Header /> 
        <section className="body flex relative top-20">
            <div className="basis-1/6">
                <Menu />
            </div>
            <div className="basis-3/6">
                <div className="card">
                    <div className="flex flex-row mb-5">
                        <div className="mr-3">
                            <img className="object-cover rounded-full w-10 h-10" src={"/assets/images/profile_image.png"} />
                        </div>
                        <div className="text-sm basis-1/2">
                            <p className="font-bold">Ada Lovelace</p>
                            <p className="text-slate-500">December 9 at 11:43 AM</p>
                        </div>
                        <div className="text-right basis-1/2">
                            <DotsVerticalIcon className="w-5 h-5 text-gray-400 inline-block" />
                        </div>
                    </div>

                    <div className="inline-block">
                        <p className="support">Cinema</p>
                        <h3 className="text-lg heading mb-2">What would you..</h3>
                        <p className="">Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what we could have otherwise been one of the best businesses of our generation.</p>
                    </div>

                    <div className="mt-5 flex flex-row">
                        <div className="basis-1/2">
                            <ThumbUpIcon className="h-5 w-5 text-gray-400 inline-block"/><div className="mx-2 text-sm font-bold mr-8 inline-block">29</div>
                            <ChatAltIcon className="h-5 w-5 text-gray-400 inline-block" /><div className="mx-2 text-sm font-bold mr-8 inline-block">11</div>
                            <EyeIcon className="h-5 w-5 text-gray-400 inline-block"/><div className="mx-2 text-sm font-bold mr-8 inline-block">2.9k</div>
                        </div>
                        <div className="basis-1/2 text-right">
                            <ShareIcon className="h-5 w-5 text-gray-400 inline-block"/><div className="mx-2 text-sm font-bold inline-block">Share</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/6">
                <div className="card ml-10">
                    <h3 className="text-lg heading mb-2">Who to follow</h3>
                    <div><span className="button ~neutral @low text-sm py-2 px-4 w-full">View all</span></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default App