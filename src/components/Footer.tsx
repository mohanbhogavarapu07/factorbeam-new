import { Link } from "react-router-dom";

// Security: All external links use rel="noopener noreferrer" to prevent tabnabbing

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-left">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" id="footer-about" className="text-base hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" id="footer-careers" className="text-base hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" id="footer-contact" className="text-base hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" id="footer-privacy" className="text-base hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" id="footer-terms" className="text-base hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-left">
          <p className="text-base text-slate-400">
            &copy; 2025 FactorBeam. All rights reserved. All assessments are for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
