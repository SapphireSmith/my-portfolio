import { LoaderIcon } from "../assets/icons"

const Loader = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen pb-14">
            <img src={LoaderIcon} alt="loader" height={40} width={40} />
            <p className="text-xl">Just a second...</p>
        </div>
    )
}

export default Loader