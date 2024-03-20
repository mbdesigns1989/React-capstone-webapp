import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCard from './pages/CountriesPage';
import CardDescription from './pages/DetailsPage';

const App = () => {
  const countries = useSelector((state) => state.data.countries);

  return (
    <>
      <Switch>
        {countries.map((country) => (
          <Route exact path={`/${country.country}`} key={country}>
            <CardDescription country={country.country} />
          </Route>
        ))}
        <Route exact path='/'>
          <CountryCard />
        </Route>

      </Switch>
    </>
  );
};

export default App;