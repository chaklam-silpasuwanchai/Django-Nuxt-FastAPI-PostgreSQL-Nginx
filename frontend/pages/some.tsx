import Layout from "@/components/layouts/Layout";
import Main from "@/components/layouts/Main";

export default function SomePage() {
  // const theme = {bg: "light" , color: "#222"};  later on for dark mode and light mode
  return (
    <Layout>
      <Main>
        <div className="section lot-of-text lead">
          <h1 className="display-4 font-weight-normal">Punny headline</h1>
          <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
          <a className="btn btn-outline-secondary" href="#">Coming soon</a>
      </div>
      </Main>
    </Layout>
  );
}
