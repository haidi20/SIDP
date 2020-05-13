var baseDomain = document.head.querySelector('meta[name="api-base-url"]').content;

console.log(baseDomain);

module.exports = {
    // baseUrl: process.env.NODE_ENV === "development" ? "/api" : process.env.PUBLIC_URL+"/public/api",
    // baseUrl: process.env.NODE_ENV === "development" ? "/api" : baseDomain + '/public/api',
    baseUrl: baseDomain === "http://localhost:8000" ? baseDomain + "/api" : baseDomain + '/api',
}