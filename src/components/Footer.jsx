
import GeekyLogo from '../assets/img/logo.jpg';

const Widget = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={GeekyLogo} alt="Geeky Techh Logo" className="footer-logo" />
                </div>
                <div className="footer-right">
                    <p className="copyright">Copyright © 2023 Geeky Techh.</p>
                    <p className="location">Mumbai, India.</p>
                </div>
            </div>
        </div>
    );
}

export default Widget;
