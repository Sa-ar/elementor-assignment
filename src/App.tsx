import { QueryClient, QueryClientProvider } from "react-query";
import Card from "./components/Card";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid min-h-screen place-items-center">
        <Card />
      </div>
    </QueryClientProvider>
  );
}

export default App;
