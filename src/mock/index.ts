// src/mocks/index.ts
export async function initMocks() {
  if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
  ) {
    const { worker } = await import("./browser");
    worker.start({
      onUnhandledRequest: "bypass", // prevents errors for requests you don’t mock
    });
  }
}
