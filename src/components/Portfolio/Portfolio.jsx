

import img from "../../assets/images/poert1.png"
import img1 from "../../assets/images/port2.png"
import img2 from "../../assets/images/port3.png"



export default function Portfolio() {
    return (
        <>

            <div className="">
                <div className="container text-center" id="portfolio">
                    <h1 className="text-center text-dark fw-bold">PORTFOLIO COMPONENT</h1>
                    <i className="fa-regular fa-star fs-2 text-dark  "></i>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img} alt="" className="w-100 m-3" />
                        </div>
                        <div className="col-md-4">
                            <img src={img1} alt="" className="w-100 m-3" />
                        </div>
                        <div className="col-md-4">
                            <img src={img2} alt="" className="w-100 m-3" />
                        </div>
                        <div className="col-md-4">
                            <img src={img} alt="" className="w-100 m-3" />
                        </div>
                        <div className="col-md-4">
                            <img src={img1} alt="" className="w-100 m-3" />
                        </div>
                        <div className="col-md-4">
                            <img src={img2} alt="" className="w-100 m-3" />
                        </div>
                    </div>
                </div>
            </div >




        </>
    )
}
