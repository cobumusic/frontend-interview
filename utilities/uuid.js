import {v4 as uuidv4} from "uuid";

/**
 * Object containing UUID type prefixes
 */
export const UUID_TYPES = {
  MIXPANEL: "mp",
};

/**
 * A field whose value is one of UUID_TYPES
 */
/**
 * Generate a UUID with a specified type prefix. Prefixes help make it clearer what object a uuid represents.
 * @param type - The type of UUID to generate
 * @returns    A string containing the type prefix and a UUID without hyphens
 */
export default function uuid(type){
  return `${type}_${uuidv4().replace(/-/g, "")}`;
}
