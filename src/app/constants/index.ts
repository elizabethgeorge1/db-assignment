const APP_CONSTANTS = {
    apiPrefix: "/api",
    params: "params",
    query: "query",
    body: "body",
    authorizationHeader: "Authorization",
    bearer: "Bearer",
    basePath:`http://localhost:${process.env.PORT}`,

    // Add the short name of the service below
    service: "employee-app",
    
    
};
export enum roles{
    admin="admin",
    hr="hr",
    engineer="engineer",
    manager="manager"
};
export default APP_CONSTANTS;

