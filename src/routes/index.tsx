import React, { Suspense, lazy, FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLoding from '@/components/PageLoading'

const routes = [
  {
    path: '/login',
    name: 'login',
    icon: 'profile',
    component: lazy(() => import('@/pages/login')),
  },
]

const Routes: FC = () => (
  <Router>
    <Suspense fallback={PageLoding}>
      <Switch>
        {routes.map((item) => (
          <Route key={item.path} path={item.path} component={item.component} />
        ))}
      </Switch>
    </Suspense>
  </Router>
)

export { routes }

export default Routes
