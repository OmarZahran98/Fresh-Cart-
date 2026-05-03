import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import { faClock, faEnvelope, faHeadset, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <Header/>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="space-y-6">

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FontAwesomeIcon className="text-primary-600" icon={faPhone} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-500">
                  Mon–Fri from 8am to 6pm
                </p>
                <p className="text-green-600 font-medium">
                  +1 (800) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FontAwesomeIcon className="text-primary-600" icon={faEnvelope} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-500">
                  We'll respond within 24 hours
                </p>
                <p className="text-green-600 font-medium">
                  support@freshcart.com
                </p>
              </div>
            </div>
          </div>

          {/* Office */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FontAwesomeIcon className="text-primary-600" icon={faLocationDot} />
              </div>
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="text-sm text-gray-500">
                  123 Commerce Street <br />
                  New York, NY 10001 <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FontAwesomeIcon className="text-primary-600" icon={faClock} />
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-sm text-gray-500">
                  Monday - Friday: 8am - 6pm <br />
                  Saturday: 9am - 4pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side - Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <FontAwesomeIcon className="text-primary-600" icon={faHeadset} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Send us a Message</h2>
              <p className="text-sm text-gray-500">
                Fill out the form and we'll get back to you
              </p>
            </div>
          </div>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select a subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Orders</option>
            </select>

            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-700 transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}