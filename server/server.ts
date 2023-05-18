import  {MockData}  from "./db";
import fastify, {RequestGenericInterface} from "fastify";
import cors from '@fastify/cors';
import {config} from 'dotenv';
import fastifyHttpProxy from "@fastify/http-proxy";
import {GetGHProxySecureOptions } from "./proxy";

config();
const server = fastify()

let proxyOptsSecure = GetGHProxySecureOptions(process.env.GH_ACCESS_TOKEN)
server.register(fastifyHttpProxy, proxyOptsSecure)



//setup CORS - this will be necessary for API requests from a VUE or any SPA app 
server.register(cors, {
    origin: "*"
})

server.get('/repos', async (request, reply) => {
  return MockData;
})

//If you want to pass a parameter like /student/123 setup an interface
//for the parameter
interface requestRepo extends RequestGenericInterface {
    Params: {
      repo: string
    }
}
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /student/123 will pull 123 out of the constant
server.get<requestRepo>('/repos/:repo', async (request, reply) => {
    const { repo } = request.params;
    const repository = MockData.find(element => element.repo == repo);
    if (repository) {
        return repository;
    } else {
        let errObj = {error: `The repository called = ${repo} was not found`};
        reply.code(404).send(errObj);
        return
    }
  })


server.listen({ port: 9500 }, (err, address) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server listening at ${address}`)
})