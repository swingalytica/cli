import { normalizeMongoExportedJson } from "./serialize/normalizer.js";

export function serializeGGN(json: Record<string, any>[]) {
  return normalizeMongoExportedJson(json);
}
