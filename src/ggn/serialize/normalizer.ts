import { cleanse } from "../utils/cleanse.js";

export function normalizeMongoExportedJson(json: Record<string, any>[]) {
  json.forEach((item) => {
    cleanse(item);
  });
  return json;
}
