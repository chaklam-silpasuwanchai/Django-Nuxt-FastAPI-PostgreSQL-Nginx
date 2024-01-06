import NavbarComponent from "@/components/Navbar";
import SidebarComponent from "@/components/Sidebar";
import FooterComponent from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <NavbarComponent />
      <SidebarComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
