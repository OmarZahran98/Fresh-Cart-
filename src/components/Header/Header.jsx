import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <>
    <div className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-90 mb-2">Home / Contact Us</p>

          <div className="flex items-center gap-4">
            <div className="bg-green-400 p-3 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-2xl" icon={faHeadset} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="opacity-90">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
