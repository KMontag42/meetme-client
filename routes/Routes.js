import HomeView from '../components/HomeView';
import AccountView from '../components/AccountView';
import MeetView from '../components/MeetView';
import FindView from '../components/FindView';

export default Routes = [
  { Component: HomeView, title: 'some title', props: {}, index: 0 },
  { Component: AccountView, title: 'another title', props: {}, index: 1 },
  { Component: MeetView, title: 'another title', props: {}, index: 2 },
  { Component: FindView, title: 'another title', props: {}, index: 3 },
];
