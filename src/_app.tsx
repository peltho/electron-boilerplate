import React from "react"

const App = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">💖 Hello world!</h1>
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
                    <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what we could have otherwise been one of the best businesses of our generation.</p>
                </div>
            </div>
        </div>
    )
}

export default App