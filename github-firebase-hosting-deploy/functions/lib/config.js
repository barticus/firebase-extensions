"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    branch: process.env.BRANCH,
    deployRoot: process.env.DEPLOY_ROOT,
    location: process.env.LOCATION,
    repository: process.env.GITHUB_REPOSITORY,
    siteName: process.env.SITE_NAME,
};
