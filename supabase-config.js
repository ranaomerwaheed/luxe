
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzYWJxd255bHhub3V2aXplbWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2Njg0MTEsImV4cCI6MjExMDI0NDQxMX0.AUA-NyF9jiMAg7McVl_xoboF2FOV_l1UTbbwySASwdU";

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
