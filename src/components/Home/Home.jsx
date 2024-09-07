
import img from "../../assets/images/avatar-3.jpg";


export default function Home() {
    return (
        <>
            <div className=" bg-success h-100 p-5">
                <div className="container h-100">
                    <div className="text-center ">
                        <img src={img} alt="logo" className="w-25 my-3  rounded-circle" />
                    </div>
                    <h1 className="text-center text-white">START FRAMEWORK</h1>
                    <div className="text-center">
                        <span className="w-25  bg-white " style={{ height: 25 }}></span>
                        <i className="fa-regular fa-star fs-2 text-white" ></i>
                        <span></span>
                        <p className="text-white  fs-5">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div >


        </>
    )
}
