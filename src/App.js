import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import ExplorePage from './pages/Explore';
import MyLessonPage from './pages/MyLesson';
import ShoppingCartPage from './pages/ShoppingCart';
import StatisticsPage from './pages/Statistics';
import TutorsPage from './pages/Tutors';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <TutorsPage />,
    },
    {
      path: "/explore",
      element:  <ExplorePage />,
    },
    {
      path: "/lesson",
      element:  <MyLessonPage />,
    },
    {
      path: "/statistics",
      element: <StatisticsPage />,
    },
    {
      path: "/shopping-cart",
      element:  <ShoppingCartPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* <Router>
        <Switch>
          <Route exact path='/'>
            <TutorsPage />
          </Route>
          <Route path='/explore'>
            <ExplorePage />
          </Route>
          <Route path='/lesson'>
            <MyLessonPage />
          </Route>
          <Route path='/statistics'>
            <StatisticsPage />
          </Route>
          <Route path='/shopping-cart'>
            <ShoppingCartPage />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
