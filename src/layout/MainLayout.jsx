import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
function MainLayout() {
  return (
    <nav>
      <Navbar />
      <main className="grow-1">
        <Outlet />
      </main>
      <Footer />
    </nav>
  );
}

export default MainLayout;
