// @ts-nocheck
const path = process.env.stepPath;

(async () => {
  if (!path) {
    throw new Error("stepPath parameter is empty");
  }

  const stuff = await import(path);

  process.stdout.write(JSON.stringify(stuff.default));
})();
