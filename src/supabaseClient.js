import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lxtfybebncgjjyoubocv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4dGZ5YmVibmNnamp5b3Vib2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NzY0NjEsImV4cCI6MjA4OTM1MjQ2MX0.x-mDXgpAa3Fng8yOn8z8e63PWZSsETCrEISj4hxlKtE"
);