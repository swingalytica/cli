export function normalizeMongoExportedJson(json: Record<string, any>[]) {
  json.forEach((item) => {
    for (const key in item) {
      if (["_id", "user_id", "__v"].includes(key)) {
        delete item[key];
        continue;
      }

      if (item[key] && typeof item[key] === "object" && "$date" in item[key]) {
        item[key] = new Date(item[key]["$date"]);
      }
    }
  });
  return json;
}
