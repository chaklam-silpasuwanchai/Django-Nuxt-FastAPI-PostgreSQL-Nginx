import Layout from "@/components/layouts/Layout";
import Main from "@/components/layouts/Main";

export default function SomePage() {
  // const theme = {bg: "light" , color: "#222"};  later on for dark mode and light mode
  return (
    <Layout>
      <Main>
        <div className="section lot-of-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          eligendi, ad rerum unde corporis exercitationem aut, ipsam et
          doloremque consectetur similique magni odio fugiat totam provident,
          sit sunt omnis dicta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque quae delectus, cum provident laboriosam at.
          Repudiandae esse veniam quam, reiciendis et facilis blanditiis ut
          optio eligendi dignissimos quas sed voluptate?
        </div>
      </Main>
    </Layout>
  );
}
