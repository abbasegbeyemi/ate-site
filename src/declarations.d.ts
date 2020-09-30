// This file holds ambient type declarations.
declare module '*.yaml' {
  const content: [{ section: { name: string; title: string; text: string } }];
  export default content;
}
