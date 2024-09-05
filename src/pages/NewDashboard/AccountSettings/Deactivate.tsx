const Deactivate = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col p-2">
        <h2 className="text-base text-gray-800 font-bold">Deactivate Account</h2>
        <div className="flex flex-col md:flex-row gap-16 text-sm p-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-gray-800">Email</h3>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-[250px] rounded-lg p-2 border-gray-400 outline-none border-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-gray-800">Password</h3>
            <input
              type="password"
              placeholder="************"
              className="w-[250px] rounded-lg p-2 border-gray-400 outline-none border-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-gray-800">Current Password</h3>
            <input
              type="password"
              placeholder="************"
              className="w-[250px] rounded-lg p-2 border-gray-400 outline-none border-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="text-base text-gray-800">Reason</h3>
          <input
            type="text"
            placeholder="Reason"
            className="w-[250px] rounded-lg p-2 border-gray-400 outline-none  border-2"
          />
        </div>
        <div className="flex flex-col p-4">
          <h2 className="text-base text-gray-800">Other</h2>
          <textarea
            name=""
            placeholder="Let Us Know How We Can Serve You Better..."
            id=""
            className="w-9/12 outline-none resize-none p-2 border-gray-400 border-2 rounded-lg"
          ></textarea>
        </div>
        <span className="text-gray-600 ml-4 p-1">This is hint text to help users</span>
        <div className="  rounded-full w-56 text-center bg-green-500 text-white ml-4 p-2">
          <button>Deactivate</button>
        </div>
      </div>
    </div>
  );
};

export default Deactivate;
