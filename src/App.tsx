import { QueryClient, QueryClientProvider } from "react-query";
import Card from "./components/Card";

const queryClient = new QueryClient();

const MAX_ITEMS = 5;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid min-h-screen place-items-center">
        <Card maxItems={MAX_ITEMS} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
