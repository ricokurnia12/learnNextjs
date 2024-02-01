import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import MainLayout from "@/components/MainLayout";
export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
