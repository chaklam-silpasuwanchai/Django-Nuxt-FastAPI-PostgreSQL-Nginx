import Layout from "../components/Layout";
import Main from "../components/Main";
import NavbarComponent from "../components/Navbar"
import SidebarComponent from "../components/Sidebar"
import { FooterComponent } from "../components/Footer";


export default function App() {
  const theme = "dark";
  return (
    <Layout>
      <NavbarComponent  theme={theme}/>
      <SidebarComponent theme={theme}/>
      <Main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dicta minima molestiae nesciunt repellendus ipsum. Itaque culpa
          expedita vero repellendus ullam. Repellat, fugit quibusdam? Totam
          accusantium officiis velit unde sequi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt dicta minima molestiae nesciunt
          repellendus ipsum. Itaque culpa expedita vero repellendus ullam.
          Repellat, fugit quibusdam? Totam accusantium officiis velit unde
          sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          eligendi, ad rerum unde corporis exercitationem aut, ipsam et
          doloremque consectetur similique magni odio fugiat totam provident,
          sit sunt omnis dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque quae delectus, cum provident laboriosam at.
          Repudiandae esse veniam quam, reiciendis et facilis blanditiis ut
          optio eligendi dignissimos quas sed voluptate?
        </p>
      </Main>
      <FooterComponent  theme={theme}/>
    </Layout>
  );
}
