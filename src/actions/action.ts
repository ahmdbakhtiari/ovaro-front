import { handleFetchResponse } from "../lib/server/cache";
import { UrlMaker } from "../lib/utils";


const JSON_HEADERS: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};



export const postMessageInChat = async (data: unknown) => {
  try {
    const res = await fetch(UrlMaker("chat/"), {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(data),
    });

    const body = await res.json();

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        body,
      };
    }

    return {
      ok: true,
      status: res.status,
      body,
    };
  } catch (e) {
    return {
      ok: false,
      status: 500,
      body: {
        message: "مشکلی پیش آمده لطفا بعدا مجدد تلاش کنید.",
        errors: e instanceof Error ? e.message : "Unknown error",
      },
    };
  }
};
