import Layout from "./components/Layout";
import Main from "./components/Main";
import NavbarComponent from "./components/Navbar";
import SidebarComponent from "./components/Sidebar";
import FooterComponent from "./components/Footer";
import BreadcrumbComponent from "./components/Breadcrumb";
import DashcardComponent from "./components/Dashcard";
import TableComponent from "./components/Table";

export default function HomePage() {
  // const theme = {bg: "light" , color: "#222"};  later on for dark mode and light mode
  return (
    <Layout>
      <NavbarComponent />
      <SidebarComponent />
      <Main>
        <div className="breadcrumb">
          <BreadcrumbComponent />
        </div>
        <div className="section dashboard">
          <DashcardComponent />
        </div>
        <div className="section table">
          <TableComponent />
        </div>

        <p>
          Lorems ipsum dolor sit amet consectetur, adipisicing elit. Sed
          eligendi, ad rerum unde corporis exercitationem aut, ipsam et
          doloremque consectetur similique magni odio fugiat totam provident,
          sit sunt omnis dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque quae delectus, cum provident laboriosam at.
          Repudiandae esse veniam quam, reiciendis et facilis blanditiis ut
          optio eligendi dignissimos quas sed voluptate?
        </p>
      </Main>
      <FooterComponent />
    </Layout>
  );
}