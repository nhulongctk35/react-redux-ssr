import { injector } from '../../components/Injector';
import sagas from './sagas';
import reducers from './reducers';
import UsersContainer from './UsersContainer';

export default injector(
  {
    sagas,
    reducers,
  },
  UsersContainer
);