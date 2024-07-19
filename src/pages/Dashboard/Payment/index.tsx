import DashboardNav from "../DashboardNav"
import Menu from "../Menu"
import PaymentPageContent from "./PaymentPageContent";



const PaymentPage =()=>{

  return (
    <div className="w-full h-auto">
        <DashboardNav />
        <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />

        <PaymentPageContent />
     
      </div>

    </div>
    );
}

export default PaymentPage;
