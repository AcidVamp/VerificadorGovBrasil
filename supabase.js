const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lofuzcoxsbrzzudwjixt.supabase.co'; // Coloque sua URL do Supabase aqui
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvZnV6Y294c2Jyenp1ZHdqaXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjE0ODQsImV4cCI6MjA2MTAzNzQ4NH0.Izz3Qs_ORCzP2tJslH01Jw8UV2qZEmsqGmsXfzb2cIg'; // Coloque sua chave de API aqui
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  let { data, error } = await supabase
    .from('sua_tabela')
    .select('*');

  console.log(data, error);
}

fetchData();