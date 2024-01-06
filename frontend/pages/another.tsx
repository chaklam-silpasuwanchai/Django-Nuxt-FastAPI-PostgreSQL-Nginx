import Layout from "@/components/Layout";
import Main from "@/components/Main";
import NavbarComponent from "@/components/Navbar";
import SidebarComponent from "@/components/Sidebar";
import FooterComponent from "@/components/Footer";
import BreadcrumbComponent from "@/components/Breadcrumb";
import FormComponent from "@/components/Form";

export default function AnotherPage() {
  // const theme = {bg: "light" , color: "#222"};  later on for dark mode and light mode
  return (
    <Layout>
      <NavbarComponent />
      <SidebarComponent />
      <Main>
        <div className="breadcrumb">
          <BreadcrumbComponent />
        </div>
        <div className="section my-form">
          <FormComponent />
        </div>
      </Main>
      <FooterComponent />
    </Layout>
  );
}
