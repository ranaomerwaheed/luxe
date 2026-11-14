
/* ==========================================
   LUXE ADMIN PANEL
   SUPABASE CONFIGURATION
   ========================================== */

(function () {
  "use strict";

  const SUPABASE_URL =
    "https://ksabqwnylxnouvizemfu.supabase.co";

  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzYWJxd255bHhub3V2aXplbWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2Njg0MTEsImV4cCI6MjExMDI0NDQxMX0.AUA-NyF9jiMAg7McVl_xoboF2FOV_l1UTbbwySASwdU";

  // Check Supabase library
  if (!window.supabase) {
    console.error(
      "LUXE ERROR: Supabase library not loaded."
    );
    return;
  }

  // Prevent duplicate initialization
  if (window.LUXE_SUPABASE) {
    console.log(
      "LUXE: Supabase already initialized."
    );
    return;
  }

  // Initialize Supabase
  window.LUXE_SUPABASE =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

  console.log(
    "LUXE: Supabase initialized successfully!"
  );

})();
