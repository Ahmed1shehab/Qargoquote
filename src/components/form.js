import { FaRegCommentDots } from "react-icons/fa";

export const Form = ({ isFormOpen, setIsFormOpen }) => {
  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="relative">
      <div
        className="fixed bottom-4 right-4 p-4 bg-white text-white rounded-full cursor-pointer shadow-lg"
        onClick={toggleForm}
      >
        <FaRegCommentDots size={24} className="text-rose-900" />
      </div>

      {isFormOpen && (
        <div className="fixed bottom-20 right-4 w-72 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Contact Us</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                How Can We Help?
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-900 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
