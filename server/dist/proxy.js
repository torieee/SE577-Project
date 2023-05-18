"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGHProxySecureOptions = void 0;
function GetGHProxySecureOptions(GHAccessToken) {
    return {
        upstream: 'https://api.github.com',
        prefix: 'ghsecure',
        httpMethods: ['GET', 'POST'],
        replyOptions: {
            rewriteRequestHeaders: (origReq, headers) => {
                return Object.assign(Object.assign({}, headers), { authorization: `Bearer ${GHAccessToken}` });
            }
        }
    };
}
exports.GetGHProxySecureOptions = GetGHProxySecureOptions;
