import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";

const httpPort = parseInt(process.env.HTTP_PORT) || 3010;
const p2pPort = parseInt(process.env.P2P_PORT) || 6010;

initHttpServer(httpPort);
initP2PServer(p2pPort);