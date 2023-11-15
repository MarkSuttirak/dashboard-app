import Topbar from "src/components/topbar/topbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Payment({children, linkBack, className}){
  return (
    <>
      <div className="mt-[60px]">
        <div className="dashboard-container">
          <div className="flex items-center gap-x-3">
            <button onClick={linkBack}>
              <ArrowLeft />
            </button>
            <h1 className="main-heading">Payment</h1>
          </div>

          <main className={className}>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}