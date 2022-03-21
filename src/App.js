import LoginProvider from "./context/LoginProvider";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageRoutes from "./PageRoutes";

import styles from "./App.module.css";

function App() {

  return (
    <LoginProvider>
      <div className={`${styles.mainImg}`}>
        <Header />
        <PageRoutes />
        <Footer />
      </div>
    </LoginProvider>
  );
}

export default App;
