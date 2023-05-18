"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const dotenv_1 = require("dotenv");
const proxy_1 = require("./proxy");
dotenv_1.config();
const server = fastify();
let proxyOptsSecure = proxy_1.GetGHProxySecureOptions(process.env.GH_ACCESS_TOKEN);
server.register(fastifyHttpProxy, proxyOptsSecure);
//setup CORS - this will be necessary for API requests from a VUE or any SPA app 
server.register(cors, {
    origin: "*"
});
server.get('/repos', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.MockData;
}));
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /student/123 will pull 123 out of the constant
server.get('/repos/:repo', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { repo } = request.params;
    const repository = db_1.MockData.find(element => element.repo == repo);
    if (repository) {
        return repository;
    }
    else {
        let errObj = { error: `The repository called = ${repo} was not found` };
        reply.code(404).send(errObj);
        return;
    }
}));
server.listen({ port: 9500 }, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening at ${address}`);
});
