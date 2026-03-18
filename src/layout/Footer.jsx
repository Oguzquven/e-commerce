function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">Bandage</h3>
          <div className="flex gap-4 text-gray-500">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company Info</h4>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Carrier</a>
            </li>
            <li>
              <a href="#">We are hiring</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get In Touch</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border px-3 py-2 text-sm rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-8">
        © 2024 Bandage. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
