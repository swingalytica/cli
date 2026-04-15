export function cleanse(value: any): any {
  if (value && typeof value === "object") {
    // Convert MongoDB date wrapper objects to Date
    if ("$date" in value) {
      return new Date(value["$date"]);
    }

    if (Array.isArray(value)) {
      return value.map((el) => cleanse(el));
    }

    // Plain object: remove id-like keys and recurse into properties
    for (const k of Object.keys(value)) {
      if (["_id", "user_id", "__v"].includes(k)) {
        delete value[k];
        continue;
      }
      value[k] = cleanse(value[k]);
    }
    return value;
  }
  return value;
}
