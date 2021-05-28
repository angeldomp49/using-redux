
export const apiMiddleware = (store) => (next) => (action) =>{
    if(!action.meta || action.meta.type !== 'api'){
        return next(action);
    }
};

export default apiMiddleware;