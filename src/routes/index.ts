import { Application }      from 'express';

import { CategoryRoutes }   from './category.routes';
import { CostRoutes }       from './cost.routes';
import { UserRoutes }       from './user.routes';

export class Routes {
  public static initialize(app: Application) {
    CategoryRoutes.initialize(app);
    CostRoutes.initialize(app);
    UserRoutes.initialize(app);
  }
}