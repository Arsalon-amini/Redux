const logger = param => store => next => action => {
    console.log("logging", param);
    return next(action); //return object that comes from next middleware
}

export default logger;