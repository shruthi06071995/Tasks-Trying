function Header() {
    return (
        <>
            <div className="container{breakpoint} text-center" id="header">
                <div className="row align-items-center">
                    <div className="col-6 ">
                        <h3 className="heading"><a href="#">FREE WEBSITE TEMPLATES</a></h3>
                    </div>
                    <div className="col-2">
                        <p className="para1"><a href="#">DOWNLOAD</a></p>
                    </div>
                    <div className="col-2">
                        <p className="para2"><a href="#">DISCUSS</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header