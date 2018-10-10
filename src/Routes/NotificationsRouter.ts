import RouterBase from "../Bases/RoutesBaseClass"
import {Request, Response} from "express"

export const NotificationsRouter = new RouterBase().RouterObject;

NotificationsRouter.route('/')
.get((req: Request, res: Response) => {
    res.send("notifications page running");
});

NotificationsRouter.route('/:id')
.get((req: Request, res: Response) => {
    res.send(req.params);
});

