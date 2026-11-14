/* LUXE Supabase browser configuration
 * This file contains only the project URL and public anon/publishable key.
 * Never add a service_role key, sb_secret key, or database password here.
 */
(function () {
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase JS library did not load. Check the CDN script tag.');
    return;
  }

  const SUPABASE_URL = 'https://ksabqwnylxnouvizemfu.supabase.co';
  const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzYWJxd255bHhub3V2aXplbWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2Njg0MTEsImV4cCI6MjExMDI0NDQxMX0.AUA-NyF9jiMAg7McVl_xoboF2FOV_l1UTbbwySASwdU';

  window.luxeSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLIC_KEY,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    }
  );
})();
