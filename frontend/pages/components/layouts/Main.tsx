import BreadcrumbComponent from "@/components/Breadcrumb";

export default function Main({ children }) {
  return (
    <main className="main-container container-fluid">
      <div className="breadcrumb">
        <BreadcrumbComponent />
      </div>
      {children}
    </main>
  );
}
