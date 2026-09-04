import { handleFetchResponse } from "../lib/server/cache";
import { UrlMaker } from "../lib/utils";


const JSON_HEADERS: HeadersInit = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};



export const postNewCreditDetail = async (data: unknown) => {
  try {
    const res = await fetch(UrlMaker('predict'), {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify(data),
      cache: 'no-store',
    });


    return handleFetchResponse(res);
  } catch (e) {
    return {
      ok: false,
      status: 500,
      body: {
        message: 'مشکلی پیش آمده لطفا بعدا مجدد تلاش کنید.',
        errors: e instanceof Error ? e.message : 'Unknown error',
      },
    };
  }
};