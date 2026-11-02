import { expect, test } from "@playwright/test";
import { config } from "dotenv";

// Read the same env files as the dev server so local runs with keys keep this coverage.
config({ path: [".env.local", ".env"], quiet: true });
const clerkConfigured = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
);

test("missing assets return 404 without invoking workspace authentication", async ({ request }) => {
  for (const path of [
    "/favicon.ico",
    "/missing-image.png",
    "/missing-font.woff2",
    "/unknown/file.css",
  ]) {
    const response = await request.get(path, {
      maxRedirects: 0,
      headers: { accept: "text/html", "user-agent": "Mozilla/5.0" },
    });
    expect(response.status(), path).toBe(404);
    expect(await response.text(), path).not.toContain("can't detect usage of clerkMiddleware");
  }
});

test("Clerk's local rewrite does not proxy back into the development server", async ({
  request,
}) => {
  test.skip(!clerkConfigured, "Needs Clerk keys; without them /sign-in redirects to /setup.");
  const headers = {
    accept: "text/html",
    "user-agent": "Mozilla/5.0",
    cookie: "__clerk_redirect_count=3",
  };
  for (const path of ["/", "/sign-in"]) {
    const response = await request.get(path, { headers, maxRedirects: 0 });
    expect(response.status(), path).toBe(200);
  }
  const dashboard = await request.get("/dashboard", { headers, maxRedirects: 0 });
  expect(dashboard.status()).toBe(307);
  expect(new URL(dashboard.headers().location, "http://localhost").pathname).toBe("/sign-in");
});

test("workspace pages still require authentication", async ({ request }) => {
  for (const path of ["/dashboard", "/settings", "/vehicles", "/rentals/new", "/onboarding"]) {
    const response = await request.get(path, {
      maxRedirects: 0,
      headers: { accept: "text/html", "user-agent": "Mozilla/5.0" },
    });
    expect(response.status(), path).toBe(307);
    const location = response.headers().location;
    expect(location, path).toBeTruthy();
    expect(new URL(location, "http://localhost").pathname, path).toMatch(
      /^\/(?:sign-in|setup|v1\/client\/handshake)/,
    );
  }
});
