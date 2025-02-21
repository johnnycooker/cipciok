import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface MainLayoutProps {
	children: React.ReactNode;
	marginTop?: boolean;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen font-custom">
			<Navbar />
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
