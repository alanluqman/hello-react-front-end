import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Greeting from './components/greeting';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Greeting />
    </QueryClientProvider>
  );
}

export default App;
