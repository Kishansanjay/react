import './ctaCard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function ctaCard(username) {
    console.log(username);
    
    return (
        <>
            <div className="hw-wrap style-three ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title style-three mb-35"><h2 className="mb-0">How Abezo Works For The Candidates</h2></div>
                        </div>
                    </div>
                    <div className="hw-card-wrap d-flex flex-wrap align-items-start justify-content-between">
                        <div className="hw-card style-three text-center position-relative index-1 transition">
                            <div className="hw-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary">
                                <img src="https://angular.envytheme.com/abezo/img/how-it-works/favorite.svg" alt="Icon" />
                            </div>
                            <h3 className="fs-18">4. Get Hired</h3>
                            <p className="mb-0">It’s very easy to open an account and start your journey.</p>
                        </div>
                        <div className="hw-card style-three text-center position-relative index-1 transition">
                            <div className="hw-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary">
                                <img src="https://angular.envytheme.com/abezo/img/how-it-works/application.svg" alt="Icon" />
                            </div>
                            <h3 className="fs-18">3. Apply For Jobs</h3>
                            <p className="mb-0">It’s very easy to open an account and start your journey.</p>
                        </div>
                        <div className="hw-card style-three text-center position-relative index-1 transition">
                            <div className="hw-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary"><img src="https://angular.envytheme.com/abezo/img/how-it-works/cv.svg" alt="Icon" /></div>
                            <h3 className="fs-18">2. Upload Your CV</h3>
                            <p className="mb-0">It’s very easy to open an account and start your journey.</p>
                        </div>
                        <div className="hw-card style-three text-center position-relative index-1 transition">
                            <div className="hw-icon d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary">
                                <img src="https://angular.envytheme.com/abezo/img/how-it-works/edit.svg" alt="Icon" />
                            </div>
                            <h3 className="fs-18">1. Create An Account</h3>
                            <p className="mb-0">It’s very easy to open an account and start your journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    );
}

export default ctaCard;