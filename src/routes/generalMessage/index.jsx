/**
 * Created by jeffse on 2018.04.24.
 */
import EnumRouter from 'constants/EnumRouter';
import { MainLayout, AssembleRoute } from 'routes/routeTool';
import Index from './routes/index';

export default AssembleRoute([
    {
        Layout: MainLayout,
        path: EnumRouter.generalMessage,
        component: Index,
    }
]);
