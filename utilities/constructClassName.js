/**
 * Constructs a className string based on provided parameters.
 *
 * @param css   - CSS module object, imported with import css from "Component.module.scss"
 * @param base  - Base class name
 * @param extra - [optional] Additional class name
 * @param cases - [optional] Object of conditional class names. Dictionary of cssName:boolean, like {multiline: true}.
 * @param error - [optional] Error object from react-hook-form
 * @returns     Constructed className string
 */
export default function constructClassName(
  css,
  base,
  extra,
  cases,
  error
) {
  //const className: string[] = [css[base]];
  const classNames = {
    [css[base]]: true,
  };

  if (extra){
    classNames[extra] = true;
  }

  if (cases){
    for (const [key, value] of Object.entries(cases)) {
      if (value) {
        classNames[css[key]] = true;
      }
    }
  }
  if (error?.message && css.error){
    classNames[css.error] = true;
  }

  //clean up any undefined or null values
  delete classNames.undefined;
  delete classNames.null;

  return Object.keys(classNames).join(" ").trim();
}
