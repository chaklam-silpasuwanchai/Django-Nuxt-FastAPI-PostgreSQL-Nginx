import Layout from "@/components/layouts/Layout";
import Main from "@/components/layouts/Main";
import FormComponent from "@/components/Form";

export default function AnotherPage() {
  // const theme = {bg: "light" , color: "#222"};  later on for dark mode and light mode
  return (
    <Layout>
      <Main>
        <div className="section my-form">
          <FormComponent />
        </div>
      </Main>
    </Layout>
  );
}
