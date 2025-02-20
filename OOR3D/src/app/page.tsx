import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Rightbar from "@/components/Rightbar";


export default function Home() {
  return (
    <div className="bg-dashboard-gradient">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex">
        <div className="flex-1 lg:ml-[200px] 3xl:ml-[255px] px-4 py-4 sm:py-6 3xl:px-8 w-full sm:w-full lg:w-[50%] 3xl:w-[60%]">
          <Header />
          <Dashboard />
        </div>
        <div className="w-0 sm:w-0 lg:w-[20%] 3xl:w-[14%] flex justify-end">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
