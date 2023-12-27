import { readdirSync, readFileSync } from "fs";

const schemaDir = "../../schema";
const fileNames = readdirSync(schemaDir);

export const typeDefs = fileNames.map((fileName) => readFileSync(schemaDir + "/" + fileName).toString("utf-8"));
