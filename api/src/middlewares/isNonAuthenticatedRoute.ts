const isNonAuthenticatedRoute = (requestUrl: string) => {
    const nonAuthenticatedRoutes = ['uploads', 'auth', 'establishments'];

    const isNonAuthenticatedRoute = nonAuthenticatedRoutes
        .some(route => requestUrl.includes(route));

    return isNonAuthenticatedRoute;
};

export default isNonAuthenticatedRoute;
