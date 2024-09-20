declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.css?module' {
  const classes: { [key: string]: string };
  export default classes;
}
