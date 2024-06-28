import Employmentdata from "./Employmentdata";

const EmploymentContent = () => {
  return (
    <div className="w-3/4 h-screen   mt-20">
      <div className="flew flex-col p-4 justify-center items-center">
        <h1 className="font-[500] text-[24px]">My Employments</h1>

        <Employmentdata />

        <div className="flex justify-center text-[#667085] mt-6">
          <p>© 2024 Goufer All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentContent;
