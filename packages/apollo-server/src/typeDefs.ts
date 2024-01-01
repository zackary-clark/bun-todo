import { readdirSync, readFileSync } from "fs";

const schemaDir = "../../schema";
const fileNames = readdirSync(schemaDir);

const typeDefs = fileNames.map((fileName) => readFileSync(schemaDir + "/" + fileName).toString("utf-8"));

export default typeDefs;
