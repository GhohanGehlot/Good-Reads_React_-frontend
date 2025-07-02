import Logo from "assets/images/logo.png";

function Home(){

    return(
        <>
        
            <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">
                <div className="h-48 w-48">
                    <img 
                        className="w-full h-full "
                        src={Logo} 
                        alt="logo1" 
                    />
                </div>

                <div className="flex justify-around items-center gap-16 ">
                    <div className="w-2/4 text-center font-semibold basis-1/2">
                        <h1 className="text-white text-5xl tracking-widest leading-normal">
                            BookShelf <br />
                            <span className="text-warning">Your Personal Library and social network for book worms</span>
                        </h1>
                    </div>

                    <div>
                        <button className="btn btn-primary rounded-md px-5 py-2 text-xl">Register</button>
                        <button className="btn btn-warning mx-3 rounded-md px-5 py-2 text-xl">Login</button>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Home;