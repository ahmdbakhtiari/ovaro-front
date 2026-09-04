
import { revalidateTag } from "next/cache";

export async function handleFetchResponse(
  fetchResult: Response,
  revalidateTags?: string[] | string
) {
  try {
    const ct = fetchResult.headers.get("content-type") || "";

    const safeJson = async (): Promise<unknown | null> => {
      if (!ct.includes("application/json")) return null;

      try {
        return await fetchResult.json();
      } catch {
        return null;
      }
    };

    if (fetchResult.ok) {
      if (revalidateTags) {
        if (typeof revalidateTags === "string") {
          revalidateTag(revalidateTags, "max");
        } else {
          revalidateTags.forEach((tag) => {
            revalidateTag(tag, "max");
          });
        }
      }

      if (fetchResult.status !== 204) {
        const response = await safeJson();

        return {
          ok: true as const,
          status: fetchResult.status,
          body: (response ?? {}) as Record<string, unknown>,
        };
      }

      return {
        ok: true as const,
        status: 204 as const,
        body: { message: "success" },
      };
    }

    // اینجا redirect نکن
    const response = await safeJson();

    return {
      ok: false as const,
      status: fetchResult.status,
      body: (response ?? {
        message: "Request failed",
      }) as Record<string, unknown>,
    };
  } catch (e: unknown) {
    // اگر جایی بالادست redirect() صدا زده شد و اینجا رسید،
    // اجازه بده خطای redirect بالا برود.
    if (isNextRedirectError(e)) {
      throw e;
    }

    return {
      ok: false as const,
      status: 500,
      body: {
        message: "An error occurred while processing the response.",
        errors: e instanceof Error ? e.message : "Unknown error",
      },
    };
  }
}

function isNextRedirectError(e: unknown): e is { digest: string } {
  return (
    typeof e === "object" &&
    e !== null &&
    "digest" in e &&
    typeof (e as { digest: unknown }).digest === "string" &&
    (e as { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}
