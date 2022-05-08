import './App.scss';
import { Header } from './app/components/Header/Header';
import { Layout } from './app/components/Layout';
import { ICoinsService } from './app/modules/api/interfaces/coins-service';
import { ApiServicesFactory } from './app/modules/api/services/api-services-factory';
import { ThemeProvider } from './app/providers/ThemeContext';

const App: React.FunctionComponent = () => {
	const coinsService: ICoinsService = ApiServicesFactory.getCoinsService();
  return (
    <div className="App">
      <ThemeProvider theme={{type: 'Light'}}>
        <Layout>
          <Header/>
        </Layout> 
      </ThemeProvider>
    </div>
  );
}

export default App;