// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  // Mock for file upload
  http.post("/api/upload", async ({ request }) => {
    // pretend we store the file and return a URL
    return HttpResponse.json({
      url: "https://fake-s3.com/uploads/sample.jpg",
    });
  }),
];
