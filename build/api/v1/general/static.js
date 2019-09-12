"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/v1/static/";
        case "production":
        /// prod URL
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return (filename) => getStaticHome(env) + filename;
}
exports.fileMapper = fileMapper;
