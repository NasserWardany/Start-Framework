

export default function Contact() {
    return (
        <>

            <div className="">
                <div className="container text-center" id="contact">
                    <h1 className="text-center text-dark fw-bold mb-3">CONATCT SECTION</h1>
                    <i className="fa-regular fa-star fs-2 text-dark mb-3 "></i>
                    <form action="" className="text-center">
                        <input type="text" className="form-control mb-5 " placeholder="userName" />
                        <input type="text" className="form-control mb-5 " placeholder="userAge" />
                        <input type="email" className="form-control mb-5 " placeholder="userEmail" />
                        <input type="password" className="form-control mb-5 " placeholder="userPassword" />
                        <input type="submit" className="bg-info px-5 py-2 text-white border-0 mb-2" />
                    </form>
                </div>
            </div>



        </>
    )
}
