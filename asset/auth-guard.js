<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://TON_PROJET.supabase.co",
  "PUBLIC_ANON_KEY"
);

const { data: { session } } = await supabase.auth.getSession();

if (!session) {
  window.location.href = "login.html";
}
</script>
