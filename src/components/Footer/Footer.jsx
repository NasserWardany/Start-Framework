

export default function Footer() {
    return (
        <>

            <div className="bg-secondary">
                <div className="container  p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-white text-center">LOCATION</h3>
                            <p className="text-white text-center">2215 John Daniel Drive</p>
                            <p className="text-white text-center">Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="text-white text-center">AROUND THE WEB</h3>
                            <div className="icons text-center mt-3">
                                <span className="text-white"><i className="fa-brands fa-facebook mx-1 icon fs-4 b-1"></i></span>
                                <span className="text-white"><i className="fa-brands fa-twitter mx-1 icon fs-4"></i></span>
                                <span className="text-white"><i className="fa-brands fa-linkedin-in mx-1 icon fs-4"></i></span>
                                <span className="text-white"><i className="fa-solid fa-globe mx-1 icon fs-4"></i></span>
                            </div>
                        </div >
                        <div className="col-md-4">
                            <h3 className="text-white text-center">ABOUT FREELANCER</h3>
                            <p className="text-center text-white">Freelance is a free to use,
                                licensed Bootstrap theme created by Route</p>
                        </div>
                    </div >
                </div >
            </div >
            <div className="end bg-dark text-white text-center p-5">
                <p>Copyright © Your Website 2021</p>
            </div>

        </>
    )
}
