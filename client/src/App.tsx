import './App.scss';
import { Dropdown } from './app/components/dropdown';
import { NamedEntity } from './app/entities/named-entity';

function App() {
  const item: NamedEntity = new NamedEntity(0, 'Jopa');
  const items: NamedEntity[] = [
    new NamedEntity(1, 'Item 1'),
    new NamedEntity(2, 'Item 2'),
    new NamedEntity(3, 'Item 3'),
    new NamedEntity(4, 'Item 4'),
    new NamedEntity(5, 'Item 5'),
  ]
  return (
    <div className="App">
      <Dropdown defaultValue={item} items={items}></Dropdown>
    </div>
  );
}

export default App;