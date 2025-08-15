    // src/components/Layout/index.tsx
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import { Outlet } from "react-router-dom";

    const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet /> {/* Isso renderiza o conteúdo das rotas */}
        </main>
        <Footer />
        </>
    );
    };

    export default Layout;