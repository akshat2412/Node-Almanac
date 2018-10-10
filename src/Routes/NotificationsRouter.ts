import RouterBase from "../Bases/RoutesBaseClass"

export const NotificationsRouter = new RouterBase().RouterObject;

NotificationsRouter.route('/')
.get(function(req, res){
    res.send("notifications page running");
});

NotificationsRouter.route('/:id')
.get(function(req, res){
    res.send(req.params);
});

