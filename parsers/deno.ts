// @ts-nocheck
const path = Deno.env.get("stepPath");

(async () => {
  if (!path) {
    throw new Error("stepPath parameter is empty");
  }

  const stuff = await import(path);

  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(stuff.default));
  await Deno.stdout.write(data);
})();
