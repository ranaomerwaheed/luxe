
/* ==========================================
   LUXE - SUPABASE CONFIGURATION
   ========================================== */

(function () {
  "use strict";

  const SUPABASE_URL =
    "https://ksabqwnylxnouvizemfu.supabase.co";

  // Paste your Supabase Publishable / anon key here.
  // Never use the service_role or secret key here.
  const SUPABASE_ANON_KEY =
    "PASTE_YOUR_EXISTING_PUBLIC_ANON_KEY_HERE";

  if (!window.supabase) {
    console.error(
      "LUXE: Supabase library is not loaded."
    );
    return;
  }

  if (
    !SUPABASE_ANON_KEY ||
    SUPABASE_ANON_KEY.includes("PASTE_YOUR")
  ) {
    console.error(
      "LUXE: Please add your public anon key."
    );
    return;
  }

  // Create Supabase client
  window.LUXE_SUPABASE = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  console.log(
    "LUXE: Supabase client initialized successfully."
  );
})();
