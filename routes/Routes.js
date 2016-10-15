import HomeView from '../components/HomeView';
import AccountView from '../components/AccountView';
import MeetView from '../components/MeetView';

export default Routes = [
  { Component: HomeView, title: 'some title', index: 0 },
  { Component: AccountView, title: 'another title', index: 1 },
  { Component: MeetView, title: 'another title', index: 2 },
];