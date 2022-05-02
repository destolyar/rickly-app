import './App.scss';
import { Layout } from './app/components/Layout';
import { ThemeProvider } from './app/providers/ThemeContext';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <ThemeProvider theme={{type: 'Light'}}>
        <Layout>
        </Layout> 
      </ThemeProvider>
    </div>
  );
}

export default App;