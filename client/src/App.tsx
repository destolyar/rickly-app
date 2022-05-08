import 'App.scss';
import { Header } from 'app/components/Header/Header';
import { Layout } from 'app/components/Layout';
import { ThemeProvider } from 'app/providers/ThemeContext';

const enum Theme {
  Light = 'Light',
  Dark = 'Dark'
}

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <ThemeProvider theme={{type: Theme.Light}}>
        <Layout>
          <Header/>
        </Layout> 
      </ThemeProvider>
    </div>
  );
}

export default App;