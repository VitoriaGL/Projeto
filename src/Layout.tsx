    // src/components/Layout/index.tsx
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import { Outlet } from "react-router-dom";
    import Perfil from " ../Perfil"

    const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet /> 
        </main>
        <Footer />
        </>
    );
    };

    export default Layout;