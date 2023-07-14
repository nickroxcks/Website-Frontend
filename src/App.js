import AllRoutes from "./routes/index";
import ThemeCustomization from "./themes/MainTheme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeCustomization>
      <ScrollToTop>
        <AllRoutes />
      </ScrollToTop>
    </ThemeCustomization>
  );
}

export default App;
